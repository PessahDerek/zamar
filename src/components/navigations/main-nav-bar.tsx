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
                    <NavBtn label={"Contacts"} to={"/"} hash={"contacts"}  />
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
                        <Menu.Dropdown className={"min-w-[200px]"}>
                            <Menu.Item className={"p-4"}>
                                <Link to={"/"}>
                                    <Button variant={'transparent'} className={"w-full !h-max"}>Home</Button>
                                </Link>
                            </Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item className={""}>
                                <Link to={"/about"}>
                                    <Button variant={'transparent'} className={"w-full"}>About</Button>
                                </Link>
                            </Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item className={""}>
                                <Link to={"/projects"} search={{category: "all", sub: "all"}}>
                                    <Button variant={'transparent'} className={"w-full"}>Projects</Button>
                                </Link>
                            </Menu.Item>
                            <Menu.Divider/>
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

