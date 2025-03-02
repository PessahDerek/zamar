import {createFileRoute, useLoaderData, useSearch} from '@tanstack/react-router'
import ProjectCategorySide from "../components/navigations/project-category-side";
import axios from "axios";
import {useMemo} from "react";
import {Image, SimpleGrid, Title} from "@mantine/core";

export const Route = createFileRoute('/projects')({
    component: RouteComponent,
    loader: async (): Promise<ProjectObj[]> => {
        return (await axios.get("https://zamar.pockethost.io/api/collections/Projects/records"))?.data?.items
    },
    validateSearch: (search: Record<string, string | undefined>) => {
        // validate and parse the search params into a typed state
        return {
            category: 'category' in search ? search.category ? search.category.toLowerCase() : "all" : search.category,
        }
    },
})

function RouteComponent() {
    const data = useLoaderData({from: "/projects"})
    const {category} = useSearch({from: "/projects"})


    const list = useMemo(() => {
        if (!category || category === "all") return data
        const x = data.filter(f => f.category.toLowerCase().includes(category.toLowerCase()))
        console.log(x)
        return x
    }, [category, data])

    return (
        <div className={"flex flex-wrap gap-4 w-[95%] h-[calc(100vh-70px)] m-auto"}>
            <ProjectCategorySide/>
            <div className={"flex-1 p-4 md:overflow-y-auto grid gap-4"}>
                {list.map((item, i) =>
                    <div className={"w-full grid auto-rows-max gap-2"} key={i}>
                        <Title c={'primary'} order={3}>{item.title}</Title>
                        <div className={"columns-2 md:columns-4 space-y-4"}>
                            {item.images.map((image, k) =>
                                <Image
                                    key={k}
                                    src={`https://zamar.pockethost.io/api/files/${item.collectionId}/${item.id}/${image}`}/>)}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
