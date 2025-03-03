import {createFileRoute, useLoaderData} from '@tanstack/react-router'
import {Image, SimpleGrid, Space, Text, Title} from "@mantine/core";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";
import ManagerCard from "../components/cards/ManagerCard";
import pb from "../libs/instances/pocketbase";
import {useEffect} from "react";

export const Route = createFileRoute('/about')({
    component: RouteComponent,
    staleTime: 8.64e+7,
    loader: async () => {
        const leaders = (await pb.collection("Team").getList()).items as unknown as LeaderObj[]

        return {leaders}
    },
    onCatch: err => {
        return []
    }
})

function ShowTitle({title}: { title: string }) {

    return (
        <Title className={"flex flex-wrap text-primary-700 gap-2"}>
            {title}
            <div className={"flex-1 max-w-[50px] h-[2px] my-auto bg-accent"}></div>
        </Title>
    )
}

function RouteComponent() {
    const {leaders} = useLoaderData({from: "/about"})
    const data = useStore(DynamicContentStore);

    useEffect(() => {
        if (Array.isArray(leaders)) {
            data.fill("leaders", leaders)
        }
    }, [])


    return (
        <div className={"w-full py-5"}>
            <div className={"w-[95%] m-auto gap-5 md:columns-2"}>
                <Image className={"rounded-xl h-[40vh] md:h-full"} src={"/ui/zamargroup.jpeg"} alt={"zamar group"}/>
                <ShowTitle title={"About us"}/>
                <Space h={10} className={"hidden md:block"}/>
                <Text>
                    Zamar Solutions is a premier advertising agency specializing in brand activation and creating
                    memorable experiences that resonate with audiences. We excel in both indoor and outdoor branding,
                    crafting visually compelling solutions that effectively convey your brand's message. Our expertise
                    also extends to digital marketing, where we design targeted strategies that enhance your online
                    visibility and engagement. Through innovative digital screen advertising, we deliver dynamic content
                    that captures attention and drives consumer interaction, ensuring your brand stands out in a crowded
                    marketplace.
                    Our dedicated team is passionate about collaboration, working closely with clients to develop
                    activation campaigns that inspire action and build lasting connections. At Zamar Solutions, we
                    understand the importance of a holistic approach to advertising, seamlessly integrating various
                    channels to amplify your brand's impact. We are committed to helping you navigate the evolving
                    landscape of marketing and advertising, empowering your brand to thrive and achieve its goals.
                </Text>
            </div>
            <Space h={40}/>
            <div className={"w-[95%] m-auto"}>
                <ShowTitle title={"The team"}/>
                <Space h={20}/>
                <div className={"grid md:grid-cols-2 gap-2 rounded-lg"}>
                    {[...leaders.values()].map(leader =>
                        <ManagerCard leader={leader} key={leader.id}/>)}
                </div>
            </div>
        </div>
    )
}
