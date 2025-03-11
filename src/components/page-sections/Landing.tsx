import {Carousel} from "@mantine/carousel";
import {Button, Flex, Image, Space, Text, Title} from "@mantine/core";
import {useStore} from "zustand/react";
import DynamicContentStore from "../../libs/content/dynamic.content";
import {Link} from "@tanstack/react-router";
import {useRef} from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import pb from "../../libs/instances/pocketbase";

export default function Landing() {
    const {texts, showcase, clients} = useStore(DynamicContentStore)
    const autoplay1 = useRef(Autoplay({delay: 7000}))
    const autoplay2 = useRef(AutoScroll({}))


    return (
        <div className={"w-full h-[calc(100vh-70px)] bg-black"}>
            <Carousel
                loop={true}
                withControls={false} withIndicators={false}
                className={"w-full h-[calc(100vh-70px)] absolute top-0 left-0 "}
                plugins={[autoplay1.current]}
            >
                {[...showcase.values()].map(show =>
                    <Carousel.Slide key={show.id} className={"w-full overflow-hidden h-[calc(100vh-70px)] bg-black"}>
                        <Image
                            src={`${pb.baseURL}/api/files/${show.collectionId}/${show.id}/${show.image}`}
                            alt={"sample work done by Zamar"}
                            className={"w-full h-full object-cover animate-zoom"}
                        />
                    </Carousel.Slide>)}
            </Carousel>
            <div className={"w-full h-full text-white flex flex-col bg-gradient-to-tr from-primary-900 to-transparent"}>
                <Flex
                    className={"w-full h-[80%] flex-1 px-[2.5%] "}>
                    <div className={"grid gap-2 mt-auto mb-10 w-3/4"}>
                        <Title className={"font-black"} size={"4rem"}
                               order={1}>{texts.get("landing_title") ?? ""}</Title>
                        <Text>
                            From bold outdoor billboards to sleek indoor displays, striking vehicle branding to
                            unforgettable activation campaigns, and powerful digital strategies—we bring your brand to
                            life. Whether on the streets or on screens, we ensure your message stands out, resonates,
                            and delivers results. Let’s craft something extraordinary together.
                        </Text>
                        <Link to={"/quote"}>
                            <Button variant={'gradient'}>
                                Get free quote
                            </Button>
                        </Link>
                    </div>
                </Flex>
                <div className={"grid gap-4"}>
                    <Title className={"pl-7"} order={3}>Our clients</Title>
                    <Carousel
                        plugins={[autoplay2.current]}
                        slidesToScroll={1}
                        // h={'15vh'}
                        slideGap={5}
                        speed={50}
                        loop={true} align={'start'}
                        slideSize={{base: "15%", md: "15%"}} withControls={false}
                        withIndicators={false}
                        className={"w-full h-max "}
                    >
                        {[...clients.values()].map(v =>
                            <Carousel.Slide key={v.id} className={"w-full h-[15vh] bg-black"}>
                                <div color={'white'} className={"w-full h-full text-primary-900 px-4 bg-white rounded-lg flex flex-col"}>
                                    <Image
                                        h={20}
                                        src={`${pb.baseURL}/api/files/${v.collectionId}/${v.id}/${v.logo}`}
                                        className={"w-full h-full object-contain flex-1 m-auto"}/>
                                </div>
                            </Carousel.Slide>
                        )}

                    </Carousel>
                </div>
                <Space h={20}/>
            </div>
        </div>
    )
}

