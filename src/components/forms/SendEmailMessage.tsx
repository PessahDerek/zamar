import {Button, Textarea, TextInput, Title} from "@mantine/core";
import {BsPersonFill, BsSend} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {BiMessage} from "react-icons/bi";
import React from "react";

interface props extends React.HtmlHTMLAttributes<HTMLFormElement>{
    title?: string,
}

export default function SendEmailMessage({title, ...rest}: props){

    return (
        <form {...rest} className={`rounded-md min-w-[300px] grid gap-2 bg-white p-4 ${rest.className}`}>
            <Title order={4}>{title??"Send us a message"}</Title>
            <TextInput
                leftSection={<BsPersonFill />}
                placeholder={"Name/Organization"}
            />
            <TextInput
                leftSection={<MdEmail />}
                placeholder={"Email"}
            />
            <Textarea
                leftSection={<BiMessage />}
                placeholder={"Your message"}
            />
            <Button leftSection={<BsSend />} >
                Submit
            </Button>
        </form>
    )
}

