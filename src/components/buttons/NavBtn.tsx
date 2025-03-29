import {Link, LinkProps, useLocation, useRouter} from "@tanstack/react-router";
import {Text} from "@mantine/core";

interface props extends LinkProps {
    label: string;
}

export default function NavBtn({label, to, ...rest}: props) {
    const {pathname, href} = useLocation()
    const router = useRouter();
    return (
        <Link onClick={() => {
            const hash = rest.hash
            if (typeof hash === "string") {
                router.subscribe('onResolved', () => {
                    const target = window.document.getElementById(hash)
                    if (target && window.location.href.endsWith(hash)) {
                        target.scrollIntoView({behavior: "smooth"})
                    }
                })

            }
        }}
            // @ts-ignore
              from={pathname} to={to} {...rest} className={""}
              activeOptions={{includeSearch: false, includeHash: true}}>
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

