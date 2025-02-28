import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'

// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';

import "./main.css"
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {appMantineTheme} from "./libs/theme/appMantineTheme";

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <MantineProvider theme={appMantineTheme}>
            <Notifications position={"top-right"}/>
            <RouterProvider router={router}/>
        </MantineProvider>)
}
