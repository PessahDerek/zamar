import {Button, Textarea, TextInput, Title} from "@mantine/core";
import {BsPersonFill, BsSend} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {BiMessage} from "react-icons/bi";
import React, {useRef} from "react";
import useForm from "../../hooks/useForm";

interface props extends React.HtmlHTMLAttributes<HTMLFormElement> {
    title?: string,
}

export default function SendEmailMessage({title, ...rest}: props) {
    const formRef = useRef<HTMLFormElement | null>(null)
    const {loading, submitForm} = useForm({formRef: formRef, templateId: "template_8rh54uc"});

    return (
        <form
            ref={formRef}
            onSubmit={submitForm} {...rest}
            className={`rounded-md min-w-[300px] grid gap-2 bg-white p-4 ${rest.className}`}
        >
            <Title order={4}>{title ?? "Send us a message"}</Title>
            <TextInput
                leftSection={<BsPersonFill/>}
                placeholder={"Name/Organization"}
                name={"name"}
                required
            />
            <TextInput
                leftSection={<MdEmail/>}
                placeholder={"Email"}
                name={"email"}
                required
            />
            <Textarea
                leftSection={<BiMessage/>}
                placeholder={"Your message"}
                name={"message"}
                required
            />
            <Button loading={loading} type={'submit'} leftSection={<BsSend/>}>
                Submit
            </Button>
        </form>
    )
}

