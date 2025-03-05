import React from "react";
import emailJs from '@emailjs/browser'
import {notifications} from "@mantine/notifications";

interface props {
    formRef: React.RefObject<HTMLFormElement|null>;
    templateId: string;
}


export default function useForm({formRef, templateId}: props) {
    const [loading, setLoading] = React.useState(false);

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        emailJs.sendForm(
            'service_zmllubm',
            templateId,
            formRef?.current ?? "",
            {
                publicKey: "g43A0QecdLPWe9J46",
            }
        ).then((value) => {
            notifications.show({title: "Success!", message: "Thank you for contacting us. We'll get back to you soon enough!"})
        }).catch(err => {
            notifications.show({title: "Error!", message: err.message, color: "accent"})
        }).finally(() => {
            setLoading(false)
            formRef?.current?.reset()
        })
    }

    return {loading, submitForm}
}
