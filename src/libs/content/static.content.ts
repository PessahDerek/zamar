import {ValidateToPath} from "@tanstack/react-router";

export interface NavPathObj {
    label: string;
    to: ValidateToPath
}


export const staticContent: {
    paths: NavPathObj[];
} = {
    paths: [
        {label: "Home", to: "/"},
        {label: "About", to: "/about"},
        {label: "Projects", to: "/projects"},
    ]
}
