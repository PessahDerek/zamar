import {Link} from "@tanstack/react-router";
import {Button, Flex, Image} from "@mantine/core";
import NavBtn from "../buttons/NavBtn";


export default function MainNavBar() {
    return (
        <Flex component={"nav"} align={'center'} justify={'center'}
              className={"w-full h-[70px] sticky top-0 z-40 px-[2.5%] bg-white"}>
            <div className={"w-full h-full flex m-auto justify-between"}>
                <Link to={"/"}>
                    <Image className={"w-max h-full"} src={"/logo.svg"} alt={"Zamar solutions logo"}/>
                </Link>
                <div className={"flex h-full m-auto justify-around"}>
                    <NavBtn label={"Home"} to={"/"}/>
                    <NavBtn label={"About"} to={"/about"}/>
                    <NavBtn label={"Projects"} to={"/projects"} search={{category: "all"}}/>
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

