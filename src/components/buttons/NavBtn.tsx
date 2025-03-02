import {Link, LinkProps} from "@tanstack/react-router";
import {Text} from "@mantine/core";

interface props extends LinkProps {
    label: string;
}

export default function NavBtn({label, to, ...rest}: props) {

    return (
        <Link to={to} {...rest} className={""} activeOptions={{includeSearch: false}}>
            {({isActive}) => {
                return (
                    <div
                        className={`w-max h-full grid px-5 border-b-4 transition-all duration-700 border-b-solid border-transparent ${isActive ? "border-b-primary" : ""}`}>
                        <Text className={`${isActive ? "text-primary-400" : ""} m-auto`}>{label}</Text>
                    </div>
                )
            }}
        </Link>
    );
}

