import {Link, useLocation} from "@tanstack/react-router";
import {NavPathObj} from "../../libs/content/static.content";
import {Text} from "@mantine/core";


export default function NavBtn({label, to}: NavPathObj) {
    const {pathname} = useLocation()
    const active = to === "/" ? pathname === to : pathname.includes(to)

    return (
        <Link to={to} className={""}>
            <div
                className={`w-max h-full grid px-5 border-b-4 transition-all duration-700 border-b-solid border-transparent ${active ? "border-b-primary" : ""}`}>
                <Text className={`${active ? "text-primary-400":""} m-auto`}>{label}</Text>
            </div>
        </Link>
    )
}

