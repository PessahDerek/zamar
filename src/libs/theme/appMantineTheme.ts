import {Button, createTheme} from "@mantine/core";


export const appMantineTheme = createTheme({
    defaultGradient: {from: "secondary", to: "accent"},
    defaultRadius: "md",
    primaryShade: 6,
    primaryColor: 'primary',
    components: {
        Button: Button.extend({
            defaultProps: {radius: "xl"},
            classNames: {root: "h-[40px]"}
        })
    },
    colors: {
        primary: [
            "#f0f0fe",
            "#deddf1",
            "#bab9df",
            "#9492ce",
            "#7471bf",
            "#605cb7",
            "#5552b4",
            "#46439e",
            "#3d3b8e",
            "#33327e"
        ],
        secondary: [
            "#fff2e0",
            "#ffe5ca",
            "#ffc999",
            "#ffac63",
            "#ff9336",
            "#ff8318",
            "#ff7a05",
            "#e46800",
            "#cc5b00",
            "#b24d00"
        ],
        accent: [
            "#ffeaf1",
            "#fcd5df",
            "#f2a9bb",
            "#e97b96",
            "#e15476",
            "#dd3b62",
            "#dc2d58",
            "#c31f48",
            "#af1740",
            "#9a0736"
        ],
        black: [
            "#f5f5f5",
            "#e7e7e7",
            "#cdcdcd",
            "#b2b2b2",
            "#9a9a9a",
            "#8b8b8b",
            "#848484",
            "#717171",
            "#656565",
            "#575757"
        ]
    }
})

