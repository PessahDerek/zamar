import * as React from 'react'
import {createRootRoute, Outlet, useLocation, useNavigate, useRouterState} from '@tanstack/react-router'
import MainNavBar from "../components/navigations/main-nav-bar";
import Footer from "../components/ui/Footer";
import PendingScreen from "../components/ui/PendingScreen";

export const Route = createRootRoute({
    component: RootComponent,
    pendingComponent: PendingScreen,
})

function RootComponent() {
    // const {subs} = useLoaderData({from: "__root__"})
    const navigate = useRouterState()

    return (
        <>
            {navigate.isLoading && <div className={"loading-light"}></div>}
            <MainNavBar/>
            <Outlet/>
            <Footer/>
            {/*<TanStackRouterDevtools position="bottom-right"/>*/}
        </>
    )
}
