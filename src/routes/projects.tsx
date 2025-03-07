import {createFileRoute, useLoaderData, useSearch} from '@tanstack/react-router'
import ProjectCategorySide from "../components/navigations/project-category-side";
import {useMemo} from "react";
import {Image, Text, Title} from "@mantine/core";
import pb from "../libs/instances/pocketbase";
import PendingScreen from "../components/ui/PendingScreen";
import ErrorScreen from "../components/ui/ErrorScreen";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";


export const Route = createFileRoute('/projects')({
    component: RouteComponent,
    shouldReload: false,
    wrapInSuspense: true,
    pendingComponent: PendingScreen,
    errorComponent: ErrorScreen,
    loader: (): Promise<ProjectObj[]> => new Promise((resolve, reject) => {
        pb.collection("Projects").getList(undefined, undefined, {expand: "client,category"})
            .then(res => resolve(res.items as unknown as ProjectObj[]))
            .catch(err => reject(err));
    }),
    validateSearch: (search: Record<string, string | undefined>) => {
        // validate and parse the search params into a typed state
        return {
            category: 'category' in search ? search.category ? search.category.toLowerCase() : "all" : search.category,
            sub: search.sub ? search.sub.toLowerCase() : undefined,
        }
    },
})

function RouteComponent() {
    const data = useLoaderData({from: "/projects"})
    const {category, sub} = useSearch({from: "/projects"})
    const {services, subs} = useStore(DynamicContentStore)

    const list = useMemo(() => {
        if (!category || category === "all") return data
        return data.filter(f => {
                return (f.expand.category.title.toLowerCase().includes(category.toLowerCase()))
            }
        )
            .filter(f => {
                if (!sub) return f
                const subCategory = subs.get(f.subcategory)
                if (!subCategory) return true
                return subCategory.subcategory.toLowerCase() == sub.toLowerCase()
            })
    }, [category, data, sub])


    return (
        <div className={"flex flex-wrap min-h-[calc(100vh-70px)] gap-4 w-[95%] m-auto"}>
            <ProjectCategorySide/>
            <div className={"flex-1 md:p-4 md:overflow-y-auto grid gap-4"}>
                {list.length < 1 && <Text className={"m-auto text-xl"}>
                    Nothing to show in this category, we're working to show you more soon😊
                </Text>}
                {list.map((item, i) =>
                    <div className={"w-full grid auto-rows-max gap-2"} key={i}>
                        <Title c={'primary'} order={3}>{item.expand.client.name}</Title>
                        <div className={"w-full h-full !space-y-2 gap-2 columns-2 md:columns-4"}>
                            {item.images.map(
                                (image, k) =>
                                    <Image
                                        key={k}
                                        src={`${pb.baseURL}/api/files/${item.collectionId}/${item.id}/${image}`}
                                        className={"w-full h-max"}
                                    />
                            )}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
