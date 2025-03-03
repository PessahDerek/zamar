import {Button, SimpleGrid, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";


export default function ProjectCategorySide() {
    // const categories = useStore(DynamicContentStore, state => state.categories);
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
        <SimpleGrid className={"w-[200px] h-full sticky top-[75px] hidden md:block rounded-lg text-white p-5 bg-primary-700"}>
            <SimpleGrid verticalSpacing={'sm'} className={"w-full h-max"}>
                <Title order={3}>Categories</Title>
                {/*<Space h={0}/>*/}
                {...links}
            </SimpleGrid>
        </SimpleGrid>
    )
}


