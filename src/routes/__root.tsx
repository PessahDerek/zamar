import * as React from 'react'
import {useEffect} from 'react'
import {createRootRoute, Outlet, useLoaderData} from '@tanstack/react-router'
import MainNavBar from "../components/navigations/main-nav-bar";
import api from "../libs/network/axios";
import {useStore} from "zustand/react";
import DynamicContentStore from "../libs/content/dynamic.content";
import {fakeLeaders, fakeReviews} from "../libs/fake/data.fake";
import Footer from "../components/ui/Footer";

export const Route = createRootRoute({
    component: RootComponent,

    loader: async () => {
        const values = (await api.get("/values")).data
        const services = (await api.get("/services")).data
        const reviews = fakeReviews
        const leaders = fakeLeaders
        return Promise.resolve({values, services, reviews, leaders})
    }
})

function RootComponent() {
    const {values, services, reviews, leaders} = useLoaderData({from: "__root__"})
    const {fill} = useStore(DynamicContentStore)

    useEffect(() => {
        if (Array.isArray(values)) {
            fill("values", values.sort((a, b) => b.text.length - a.text.length))
        }
        if (Array.isArray(services)) {
            fill("services", services)
        }
        if (Array.isArray(reviews))
            fill("reviews", reviews)
        if (Array.isArray(leaders))
            fill("leaders", leaders)
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
