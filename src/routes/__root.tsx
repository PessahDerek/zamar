import * as React from 'react'
import {useEffect} from 'react'
import {createRootRoute, Outlet, useLoaderData} from '@tanstack/react-router'
import MainNavBar from "../components/navigations/main-nav-bar";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";
import {fakeLeaders} from "../libs/fake/data.fake";
import Footer from "../components/ui/Footer";
import pb from "../libs/instances/pocketbase";

export const Route = createRootRoute({
    component: RootComponent,
    preload: true,

    loader: async () => {
        const showcase = (await pb.collection("Showcase").getList()).items as unknown as ShowcaseObj[]
        const values = (await pb.collection("values").getList()).items as unknown as ValueObj[]
        const services = (await pb.collection("services").getList()).items as unknown as ServicesObj[]
        const testimonials = (await pb.collection("Testimonials").getList()).items as unknown as TestimonialObj[]
        const clients = (await pb.collection('Clients').getList()).items as unknown as RawClientObj[]
        const leaders = fakeLeaders
        return Promise.resolve({showcase, clients, values, services, testimonials, leaders})
    }
})

function RootComponent() {
    const {showcase, clients, values, services, testimonials, leaders} = useLoaderData({from: "__root__"})
    const {fill} = useStore(DynamicContentStore)

    useEffect(() => {
        if (Array.isArray(values)) {
            fill("values", values.sort((a, b) => b.description.length - a.description.length))
        }
        console.log("Services: ", services)
        if (Array.isArray(services)) {
            fill("services", services)
        }
        if (Array.isArray(testimonials))
            fill("testimonials", testimonials)
        if (Array.isArray(leaders))
            fill("leaders", leaders)
        if (Array.isArray(showcase))
            fill("showcase", showcase)
        if (Array.isArray(clients))
            // !important modified the incoming ID to genId to be able to have different ID since they are kept in a map
            fill("clients", clients.flatMap(c => c.field.map(f => ({
                ...c,
                image: f,
                id: (c.id + Math.random() * 100),
                genId: c.id
            }))))
    }, []);


    return (
        <>
            <MainNavBar/>
            <Outlet/>
            <Footer/>
            {/*<TanStackRouterDevtools position="bottom-right"/>*/}
        </>
    )
}
