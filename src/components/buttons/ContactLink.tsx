import {IconType} from "react-icons";
import {Button, ButtonProps} from "@mantine/core";


interface props extends ButtonProps {
    label: string
    contact: string;
    href: string;
    icon?: IconType;
}

export default function ContactLink({href, label, contact, ...rest}: props) {

    return (
        <a href={href}>
            <Button
                {...rest}
                variant={'transparent'}
                leftSection={rest.icon ? <rest.icon className={"text-primary"}/> : undefined}
            >
                {label} {contact}
            </Button>
        </a>
    )
}

