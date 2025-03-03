import {IconType} from "react-icons";
import {Button, ButtonProps} from "@mantine/core";


interface props extends ButtonProps {
    label: string
    contact: string;
    href: string;
    icon?: IconType;
}

export default function ContactLink({href, label, contact, icon, ...rest}: props) {
    const Icon = icon ? icon : undefined
    return (
        <a href={href}>
            <Button
                {...rest}
                variant={'transparent'}
                leftSection={Icon && <Icon className={"text-primary"}/>}
            >
                {label} {contact}
            </Button>
        </a>
    )
}

