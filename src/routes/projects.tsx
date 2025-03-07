import {createFileRoute, useLoaderData, useSearch} from '@tanstack/react-router'
import ProjectCategorySide from "../components/navigations/project-category-side";
import {useEffect, useMemo} from "react";
import {Image, Text, Title} from "@mantine/core";
import pb from "../libs/instances/pocketbase";
import ErrorScreen from "../components/ui/ErrorScreen";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";
import ProjectLoading from "../components/ui/ProjectLoading";


export const Route = createFileRoute('/projects')({
    component: RouteComponent,
    shouldReload: false,
    wrapInSuspense: true,
    pendingComponent: ProjectLoading,
    errorComponent: ErrorScreen,
    loader: async () => {
        const subcategories = (await pb.collection("Subcategory").getList()).items as unknown as SubCategoryObj[]
        const services = (await pb.collection("services").getList(0, 50, {expand: "sub_categories"})).items as unknown as ServicesObj[]
        const projects = (await pb.collection("Projects").getList(undefined, undefined, {expand: "client,category,subcategory"})).items as unknown as ProjectObj[];
        return {projects, subcategories, services};
    },
    validateSearch: (search: Record<string, string | undefined>) => {
        // validate and parse the search params into a typed state
        return {
            category: 'category' in search ? search.category ? search.category.toLowerCase() : "all" : search.category,
            sub: search.sub ? search.sub.toLowerCase() : undefined,
        }
    },
})

function RouteComponent() {
    const {projects, subcategories, services} = useLoaderData({from: "/projects"})
    const {category, sub} = useSearch({from: "/projects"})
    const {subs, fill} = useStore(DynamicContentStore)

    const list = useMemo(() => {
        if (!category || category === "all") return projects
        return projects.filter(f => {
                return (f.expand.category.title.toLowerCase().includes(category.toLowerCase()))
            }
        )
            .filter(f => {
                if (!sub) return f
                const subCategory = subs.get(f.subcategory)
                if (!subCategory) return true
                return subCategory.subcategory.toLowerCase() == sub.toLowerCase()
            })
    }, [category, sub, projects])

    useEffect(() => {
        console.log("XX: ", subcategories)
        if (Array.isArray(projects))
            fill("projects", projects)
        if (Array.isArray(subcategories))
            fill("subs", subcategories)
        if (Array.isArray(services))
            fill("services", services)
    }, []);

    return (
        <div className={"flex flex-wrap min-h-[calc(100vh-70px)] gap-4 w-[95%] h-full pb-5 m-auto"}>
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
