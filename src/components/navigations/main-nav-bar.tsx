import {Link} from "@tanstack/react-router";
import {Button, Flex, Image} from "@mantine/core";
import {staticContent} from "../../libs/content/static.content";
import NavBtn from "../buttons/NavBtn";

export default function MainNavBar() {
    const {paths} = staticContent
    return (
        <Flex component={"nav"} align={'center'} justify={'center'} className={"w-full h-[70px] sticky top-0 z-40 px-[2.5%] bg-white"}>
            <div className={"w-full h-full flex m-auto justify-between"}>
                <Link to={"/"}>
                    <Image className={"w-max h-full"} src={"/logo.svg"} alt={"Zamar solutions logo"}/>
                </Link>
                <div className={"flex h-full m-auto justify-around"}>
                    {paths.map((path, i) => <NavBtn
                        label={path.label} to={path.to}
                        key={i}
                    />)}
                </div>
                <Link to={"/about"} className={"mt-auto mb-auto h-max"}>
                    <Button variant={'gradient'}>
                        Get free quote
                    </Button>
                </Link>
            </div>
        </Flex>
    )
}

