import * as React from 'react'
import {createFileRoute, Link} from '@tanstack/react-router'
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
import {BsInstagram, BsPhone, BsTwitterX, BsWhatsapp} from "react-icons/bs";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    const {values, services, reviews} = useStore(DynamicContentStore)

    return (
        <div className="w-full h-full">
            <Landing/>
            <Space h={20}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>At our core</Title>
                <Flex wrap={'wrap'} gap={2}>
                    {[...values.values()].map(value => <ValueCard value={value} key={value.id}/>)}
                </Flex>
            </div>
            <Space h={40}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>Our services</Title>
                <Flex wrap={'wrap'} gap={4}>
                    {[...services.values()].map(service =>
                        <ServiceCard service={service} key={service.id}/>)}
                </Flex>
            </div>
            <Space h={40}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={2} className={"font-black text-primary-700 text-5xl"}>What our clients say</Title>
                <Carousel classNames={{
                    indicator: "bg-accent", container: " pb-10",
                    indicators: " h-2 bottom-0"
                }} withIndicators={true} align={'start'} slideSize={"35%"} slideGap={10}>
                    {
                        [...reviews.values()].map(review => <Carousel.Slide key={review.id}>
                            <ReviewCard review={review}/>
                        </Carousel.Slide>)
                    }
                </Carousel>
                <Link className={"m-auto"} to={"/about"}>
                    <Button variant={'gradient'}>Get free quote</Button>
                </Link>
            </div>
            <Space h={40}/>
            <HintProjects/>
            <Space h={40}/>
            <div className={"w-[95%] grid gap-4 m-auto"}>
                <Title order={4} className={"font-black text-primary-700 text-5xl"}>Reach us</Title>
                <div className={"flex flex-wrap gap-4"}>
                    <SendEmailMessage className={'max-w-1/2 flex-1'}/>
                    <div className={"grid auto-rows-max gap-3 bg-white p-4 rounded-md"}>
                        <ContactLink color={'green'} contact={"0741120439"} label={"Whatsapp"} href={""} icon={BsWhatsapp} />
                        <ContactLink color={'blue'} contact={"0741120439"} label={"Phone"} href={""} icon={BsPhone} />
                        <ContactLink color={'primary'} contact={"@zamar_ltd"} label={"Twitter (X)"} href={""} icon={BsTwitterX} />
                        <ContactLink color={'secondary'} contact={"@zamar_ltd"} label={"Instagram"} href={""} icon={BsInstagram} />
                    </div>
                </div>
            </div>
            <Space h={40}/>
        </div>
    )
}
