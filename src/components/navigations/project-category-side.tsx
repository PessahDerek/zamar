import {Button, Title} from "@mantine/core";
import {Link, useNavigate, useSearch} from "@tanstack/react-router";
import {BiMinus, BiPlus} from "react-icons/bi";
import {useCallback, useMemo} from "react";
import {useStore} from "zustand/react";
import DynamicContentStore from "../../libs/content/dynamic.content";


export default function ProjectCategorySide() {
    // const categories = useStore(DynamicContentStore, state => state.categories);
    const {category, sub} = useSearch({from: "/projects"})
    const {services, subs} = useStore(DynamicContentStore)
    const navigate = useNavigate();
    const imOpen = useCallback((cat: string, sub_cat?: string) => {
        const one = category?.toLowerCase() == cat.toLowerCase();
        const two = sub_cat ? sub_cat.toLowerCase() == sub : one
        return one && two
    }, [category, sub])

    const navs = useMemo(() => {
        const computed = [
            ...services.values()].map(service => (
            <div className={"grid gap-2 transition-all duration-300 h-max"} key={service.id}>
                <Button
                    onClick={
                        () => {
                            if (imOpen(service.title))
                                return navigate({to: "/projects", search: {category: "all", sub: undefined}})
                            navigate({to: "/projects", search: {category: service.title, sub: undefined}}).catch(() => {
                            })
                        }
                    }
                    className={"w-full"} variant={imOpen(service.title) ? "filled" : "outline"}
                    rightSection={service.sub_categories.length > 0 ? imOpen(service.title) ?
                        <BiMinus/> : <BiPlus/> : undefined}>
                    {service.title}
                </Button>

                <div
                    className={`w-full transition-all duration-300 overflow-y-hidden ${imOpen(service.title) ? "h-max" : "h-0"} grid gap-2 pl-5`}>
                    {service.sub_categories.map(sub_cat => {
                        const sub = subs.get(sub_cat)
                        if (!sub)
                            return <></>
                        return (
                            <Link key={sub_cat} to={"/projects"}
                                  search={{category: service.title.toLowerCase(), sub: sub.subcategory.toLowerCase()}}
                                  activeOptions={{includeSearch: true, exact: false, explicitUndefined: false}}>
                                {({isActive}) =>
                                    <Button
                                        color={'black'} variant={isActive ? "light" : "transparent"}
                                        className={"w-full"}
                                    >
                                        {sub.subcategory}
                                    </Button>}
                            </Link>
                        )
                    })}
                </div>
            </div>
        ))
        return [
            (
                <Link to={"/projects"} search={{category: "all", sub: undefined}}>
                    {({isActive}) =>
                        <Button variant={isActive ? "filled" : "outline"} className={"w-full"}>All</Button>}
                </Link>
            ),
        ].concat(computed)
    }, [services, subs, navigate, imOpen])

    return (
        <div
            className={"min-w-[200px] bg-white w-full md:w-max h-full md:sticky md:top-[75px] rounded-lg p-5 "}>
            <div className={"w-full h-max grid gap-2 transition-all duration-300"}>
                <Title order={3}>Categories</Title>
                <div className={'grid gap-2 w-full'}>
                    {...navs}
                </div>
            </div>
        </div>
    )
}


