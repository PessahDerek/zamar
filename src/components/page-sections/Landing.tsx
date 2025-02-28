import {Carousel} from "@mantine/carousel";
import {Button, Card, Flex, Image, Space, Text, Title} from "@mantine/core";
import {useStore} from "zustand/react";
import DynamicContentStore from "../../libs/content/dynamic.content";
import {Link} from "@tanstack/react-router";
import {useRef} from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

export default function Landing() {
    const {texts} = useStore(DynamicContentStore)
    const autoplay1 = useRef(Autoplay({delay: 4000}))
    const autoplay2 = useRef(AutoScroll({}))


    return (
        <div className={"w-full h-[calc(100vh-70px)] bg-black"}>
            <Carousel
                loop={true}
                withControls={false} withIndicators={false}
                className={"w-full h-[calc(100vh-70px)] absolute top-0 left-0 "}
                plugins={[autoplay1.current]}
            >
                <Carousel.Slide className={"w-full h-[calc(100vh-70px)] bg-black"}>
                    <Image
                        src={"/ui/landing.jpg"}
                        alt={"sample work done by Zamar"}
                        className={"w-full h-full object-cover filter"}
                    />
                </Carousel.Slide>
                <Carousel.Slide className={"w-full h-[calc(100vh-70px)] bg-black"}>
                    <Image
                        src={"/ui/landing.jpg"}
                        alt={"sample work done by Zamar"}
                        className={"w-full h-full object-cover filter"}
                    />
                </Carousel.Slide>
            </Carousel>
            <div className={"w-full h-full text-white flex flex-col bg-gradient-to-tr from-primary-900 to-transparent"}>
                <Flex
                    className={"w-full h-[80%] flex-1 px-[2.5%] "}>
                    <div className={"grid gap-2 mt-auto mb-10 w-3/4"}>
                        <Title className={"font-black"} size={"4rem"}
                               order={1}>{texts.get("landing_title") ?? ""}</Title>
                        <Text>If supplied, this function will be called with the route match and the return value will
                            be
                            returned from useParams. This value will also be used to determine if the hook should
                            re-render
                            its
                            parent component using shallow equality checks.</Text>
                        <Link to={"/"}>
                            <Button variant={'gradient'}>
                                Get free quote
                            </Button>
                        </Link>
                    </div>
                </Flex>
                <Carousel
                    plugins={[autoplay2.current]}
                    slidesToScroll={1}
                    h={'15vh'} slideGap={5}
                    speed={50}
                    loop={true} align={'start'}
                    slideSize={"10%"} withControls={false}
                    withIndicators={false}
                    className={"w-full"}
                >
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>
                    <Carousel.Slide className={""}>
                        <Card color={'white'} className={"w-full h-[15vh]"}>
                            <Image src={"/clients/client1.png"} className={"w-full h-full object-contain"}/>
                        </Card>
                    </Carousel.Slide>

                </Carousel>
                <Space h={20} />
            </div>
        </div>
    )
}

