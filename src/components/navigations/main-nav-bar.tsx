import {Link} from "@tanstack/react-router";
import {Burger, Button, Flex, Image, Menu} from "@mantine/core";
import NavBtn from "../buttons/NavBtn";
import {useState} from "react";


export default function MainNavBar() {
    const [dropped, setDropped] = useState(false);
    return (
        <Flex
            component={"nav"} align={'center'} justify={'center'}
            className={"w-full h-[70px] sticky top-0 z-40 px-[2.5%] bg-white"}
        >
            <div className={"w-full h-full flex m-auto justify-between"}>
                <Link to={"/"}>
                    <Image className={"w-max h-full"} src={"/logo.svg"} alt={"Zamar solutions logo"}/>
                </Link>
                <div className={"hidden md:flex h-full m-auto justify-around"}>
                    <NavBtn label={"Home"} to={"/"}/>
                    <NavBtn label={"About"} to={"/about"}/>
                    <NavBtn label={"Projects"} to={"/projects"} search={{category: "all"}}/>
                </div>
                <Link to={"/quote"} className={"mt-auto mb-auto h-max hidden md:block"}>
                    <Button variant={'gradient'}>
                        Get free quote
                    </Button>
                </Link>
                <div className={"mb-auto mt-auto ml-auto md:hidden"}>
                    <Menu onChange={val => setDropped(val)}>
                        <Menu.Target>
                            <Burger opened={dropped}/>
                        </Menu.Target>
                        <Menu.Divider/>
                        <Menu.Dropdown className={"min-w-[200px]"}>
                            <Menu.Item>
                                <Link to={"/"}>Home</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={"/about"}>About</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={"/projects"} search={{category: "all"}}>Projects</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={"/quote"}>
                                    <Button className={'w-full'} variant={'gradient'}>
                                        Get free quote
                                    </Button>
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </Flex>
    )
}

