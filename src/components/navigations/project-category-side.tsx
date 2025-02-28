import {useStore} from "zustand/react";
import DynamicContentStore from "../../libs/content/dynamic.content";
import {Button, SimpleGrid, Space, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";


export default function ProjectCategorySide() {
    const categories = useStore(DynamicContentStore, state => state.categories);

    return (
        <SimpleGrid className={"w-[200px] h-[95%] rounded-lg m-auto text-white p-5 bg-primary-700"}>
            <SimpleGrid verticalSpacing={'sm'} className={"w-full h-max"}>
                <Title order={3}>Categories</Title>
                {/*<Space h={0}/>*/}
                <Link to={"/projects/brand-activation"}>
                    <Button className={"w-full"}>
                        Brand Activation
                    </Button>
                </Link>
                <Link to={"/projects/brand-activation"}>
                    <Button color={'white'} variant={'light'} className={"w-full"}>
                        Indoor & outdoor branding
                    </Button>
                </Link>
                {/*{*/}
                {/*    [...categories.values()].map(category => (*/}
                {/*        <Link to={"/projects/brand-activation"}>*/}
                {/*            <Button>*/}
                {/*                {category.category??"Test"}*/}
                {/*            </Button>*/}
                {/*        </Link>*/}
                {/*    ))*/}
                {/*}*/}
            </SimpleGrid>
        </SimpleGrid>
    )
}


