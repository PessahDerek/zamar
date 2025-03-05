import {useRef} from "react";
import useForm from "../hooks/useForm";
import {DatePickerInput} from "@mantine/dates";
import {BsPersonFill, BsSend} from "react-icons/bs";
import {createFileRoute} from '@tanstack/react-router';
import ErrorScreen from "../components/ui/ErrorScreen";
import {BiSolidCalendar, BiSolidContact} from "react-icons/bi";
import {Anchor, Button, Image, Space, Text, TextInput, Title} from "@mantine/core";

export const Route = createFileRoute('/quote')({
    component: RouteComponent,
    errorComponent: ErrorScreen,
})


function RouteComponent() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const {loading, submitForm} = useForm({formRef: formRef, templateId: "template_ehob4yn"});

    return (
        <div className={"w-full h-max grid "}>
            <div className={"w-full flex flex-wrap h-full min-h-[calc(100vh-70px)]"}>
                <div className={"flex-1 min-w-[300px] h-[30vh] md:h-full bg-black "}>
                    <Image
                        src={"/ui/callcenter.jpg"}
                        className={"w-full h-full object-center"}
                    />
                </div>
                <div className={"flex-1 p-5 bg-white flex"}>
                    <form onSubmit={submitForm} ref={formRef}
                          className={"w-full max-w-lg p-4 bg-white rounded-lg m-auto grid gap-2"}>
                        <Title c={'primary.8'} order={2}>Get free quote</Title>
                        <Title>No charge for your enquiry</Title>
                        <Text>
                            Thank you for showing interest in our services. Simply pick a date and we will get back to
                            you.
                        </Text>
                        <TextInput
                            required
                            label={"Name"}
                            placeholder={"Name/Organization"}
                            name={"name"}
                            leftSection={<BsPersonFill/>}
                            disabled={loading}
                        />
                        <TextInput
                            name={'contact'}
                            label={"Contact"}
                            description={"Separate with comma if giving more than one"}
                            placeholder={"Email/Phone"}
                            required
                            leftSection={<BiSolidContact/>}
                            disabled={loading}
                        />
                        <DatePickerInput
                            valueFormat={"DD MMM YYYY"}
                            name={"date"}
                            leftSection={<BiSolidCalendar/>}
                            minDate={new Date()}
                            label={"Pick date (Optional)"}
                            disabled={loading}
                            placeholder={"Choose when to get contacted"}
                        />
                        <Button type={'submit'} loading={loading} leftSection={<BsSend/>}>
                            Submit
                        </Button>
                        <Space h={20}/>
                        <div className={"grid gap-2"}>
                            <Title order={4}>Want to reach us directly instead?</Title>
                            <div className={"flex flex-wrap gap-4"}>
                                <Anchor href={""}>
                                    Whatsapp
                                </Anchor>
                                <Anchor href={""}>
                                    Phone
                                </Anchor>
                                <Anchor href={""}>
                                    Email
                                </Anchor>
                                <Anchor href={""}>
                                    Twitter
                                </Anchor>
                                <Anchor href={""}>
                                    Instagram
                                </Anchor>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
