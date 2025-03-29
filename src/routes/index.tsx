import * as React from 'react'
import {useEffect} from 'react'
import {createFileRoute, Link, useLoaderData} from '@tanstack/react-router'
import Landing from "../components/page-sections/Landing";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";
import {Button, Flex, Space, Title} from "@mantine/core";
import ValueCard from "../components/cards/value-card";
import ServiceCard from "../components/cards/service-card";
import ReviewCard from "../components/cards/review-card";
import {Carousel} from "@mantine/carousel";
import HintProjects from "../components/page-sections/HintProjects";
import SendEmailMessage from "../components/forms/SendEmailMessage";
import ContactLink from "../components/buttons/ContactLink";
import {BsInstagram, BsLinkedin, BsPhone, BsTwitterX, BsWhatsapp} from "react-icons/bs";
import ErrorScreen from "../components/ui/ErrorScreen";
import pb from "../libs/instances/pocketbase";
import PendingScreen from "../components/ui/PendingScreen";

export const Route = createFileRoute('/')({
    component: HomeComponent,
    pendingComponent: PendingScreen,
    errorComponent: ErrorScreen,
    loader: async () => {
        const showcase = (await pb.collection("Showcase").getList()).items as unknown as ShowcaseObj[]
        const values = (await pb.collection("values").getList()).items as unknown as ValueObj[]
        const services = (await pb.collection("services").getList(0, 50, {expand: "sub_categories"})).items as unknown as ServicesObj[]
        const testimonials = (await pb.collection("Testimonials").getList()).items as unknown as TestimonialObj[]
        // const subs = (await pb.collection("Subcategory").getList()).items as unknown as SubCategoryObj[]
        const clients = (await pb.collection('Clients').getList()).items as unknown as ClientObj[]
        // const leaders = fakeLeaders
        return Promise.resolve({showcase, clients, values, services, testimonials})
    },
    staleTime: 4.32e+7
})

function HomeComponent() {
    const store = useStore(DynamicContentStore)
    const {values, services, testimonials, clients, showcase} = useLoaderData({from: "/"})

    useEffect(() => {
        if (Array.isArray(values)) {
            store.fill("values", values.sort((a, b) => b.description.length - a.description.length))
        }
        if (Array.isArray(services))
            store.fill("services", services)
        if (Array.isArray(testimonials))
            store.fill("testimonials", testimonials)
        if (Array.isArray(showcase))
            store.fill("showcase", showcase)
        if (Array.isArray(clients))
            // !important modified the incoming ID to genId to be able to have different ID since they are kept in a map
            store.fill("clients", clients)
    }, []);

    return (
        <div className="w-full">
            <Landing/>
            <Space h={20}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>At our core</Title>
                <Flex wrap={'wrap'} gap={2}>
                    {[...store.values.values()].map(value => <ValueCard value={value} key={value.id}/>)}
                </Flex>
            </div>
            <Space h={40}/>
            <div className={"w-[95%] h-max grid auto-rows-max gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>Our services</Title>
                <div className={"w-full flex gap-2 flex-wrap"}>
                    {[...store.services.values()].map(service =>
                        <ServiceCard service={service} key={service.id}/>)}
                </div>
            </div>
            <Space h={40}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>What our clients say</Title>
                <Carousel
                    className={"w-full max-w-[95vw] overflow-hidden"}
                    classNames={{
                        indicator: "bg-accent", container: " pb-10",
                        indicators: " h-2 bottom-0"
                    }} withIndicators={true}
                    align={'start'}
                    slideSize={{md: "33%"}} slideGap={10}
                >
                    {
                        [...store.testimonials.values()].map(review =>
                            <Carousel.Slide className={"w-full"} key={review.id}>
                                <ReviewCard review={review}/>
                            </Carousel.Slide>)
                    }
                </Carousel>
                <Link className={"m-auto"} to={"/quote"}>
                    <Button variant={'gradient'}>Get free quote</Button>
                </Link>
            </div>
            <Space h={40}/>
            <HintProjects/>
            <Space h={40}/>
            <div id={"contacts"} className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={4} className={"font-black text-primary-700 text-5xl"}>Reach us</Title>
                <div className={"flex flex-wrap gap-4"}>
                    <SendEmailMessage className={'md:max-w-1/2 flex-1'}/>
                    <div
                        className={"grid h-max sm:grid-cols-1 md:grid-cols-2 auto-rows-max gap-3 bg-white p-4 rounded-md"}>
                        <ContactLink color={'green'} contact={"0741120439"} label={"Whatsapp"} href={""}
                                     icon={BsWhatsapp}/>
                        <ContactLink color={'blue'} contact={"0741120439"} label={"Phone"} href={""} icon={BsPhone}/>
                        <ContactLink color={'primary'} contact={"@zamar_ltd"} label={"Twitter (X)"} href={""}
                                     icon={BsTwitterX}/>
                        <ContactLink color={'secondary'} contact={"@zamar_ltd"} label={"Instagram"} href={""}
                                     icon={BsInstagram}/>
                        <ContactLink label={"LinkedIn"} contact={"Zamar Solutions Limited"}
                                     href={"https://ke.linkedin.com/in/zamar-solutions-limited-025bbb34a"}
                                     icon={BsLinkedin}
                        />
                    </div>
                </div>
            </div>
            <Space h={40}/>
        </div>
    )
}
