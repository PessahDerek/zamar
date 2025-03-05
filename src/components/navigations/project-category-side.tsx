import {Button, Menu, Select, SimpleGrid, Title} from "@mantine/core";
import {Link, useSearch} from "@tanstack/react-router";
import Label = Menu.Label;


export default function ProjectCategorySide() {
    // const categories = useStore(DynamicContentStore, state => state.categories);
    const {category} = useSearch({from: "/projects"})
    const links = [
        (
            <Link to={"/projects"} search={{category: "all"}}>
                {({isActive}) =>
                    <Button variant={isActive ? "filled" : "outline"} color={isActive ? "primary" : "white"}
                            className={"w-full"}>
                        All projects
                    </Button>}
            </Link>
        ),
        (
            <Link to={"/projects"} search={{category: "activation"}}>
                {({isActive}) =>
                    <Button variant={isActive ? "filled" : "outline"} color={isActive ? "primary" : "white"}
                            className={"w-full"}>
                        Activation
                    </Button>}
            </Link>
        ),
        (
            <Link to={"/projects"} search={{category: "branding"}}>
                {({isActive}) =>
                    <Button variant={isActive ? "filled" : "outline"} color={isActive ? "primary" : "white"}
                            className={"w-full"}>
                        Branding
                    </Button>}
            </Link>
        ),
        (
            <Link to={"/projects"} search={{category: "digital-marketing"}}>
                {({isActive}) =>
                    <Button variant={isActive ? "filled" : "outline"} color={isActive ? "primary" : "white"}
                            className={"w-full"}>
                        Digital marketing
                    </Button>}
            </Link>
        ),
        (
            <Link to={"/projects"} search={{category: "indoor-outdoor-branding"}}>
                {({isActive}) =>
                    <Button variant={isActive ? "filled" : "outline"} color={isActive ? "primary" : "white"}
                            className={"w-full"}>
                        Indoor & outdoor branding
                    </Button>}

            </Link>
        )
    ]
    return (
        <>
            <SimpleGrid
                className={"w-[200px] h-full sticky top-[75px] hidden md:block rounded-lg text-white p-5 bg-primary-700"}>
                <SimpleGrid verticalSpacing={'sm'} className={"w-full h-max"}>
                    <Title order={3}>Categories</Title>
                    {/*<Space h={0}/>*/}
                    {...links}
                </SimpleGrid>
            </SimpleGrid>
            <div className={"w-full h-max grid auto-rows-max gap-2 bg-primary-800 text-white rounded-lg sticky top-[75px] z-30 p-2"}>
                <Title order={4}>Select category</Title>
                <div className={"flex gap-2 overflow-x-auto"}>
                    {...links}
                </div>
                {/*<Menu>*/}
                {/*    <Menu.Target>*/}
                {/*        <Button >{category}</Button>*/}
                {/*    </Menu.Target>*/}
                {/*    <Menu.Dropdown className={"min-w-[300px] grid"}>*/}
                {/*        <Menu.Item className={""}>*/}
                {/*            <Link to={"/projects"} search={{category: "all"}}>*/}
                {/*                <Button className={"w-full"}>All</Button>*/}
                {/*            </Link>*/}
                {/*        </Menu.Item>*/}
                {/*    </Menu.Dropdown>*/}
                {/*</Menu>*/}
            </div>
        </>
    )
}


