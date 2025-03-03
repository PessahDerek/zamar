import {createFileRoute} from '@tanstack/react-router'
import {Button, Image, Text, TextInput, Title} from "@mantine/core";
import {DatePickerInput} from "@mantine/dates";

export const Route = createFileRoute('/quote')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className={"w-full h-max  grid "}>
            <div className={"w-full flex flex-wrap h-full min-h-[calc(100vh-70px)]"}>
                <div className={"flex-1 min-w-[300px] h-[30vh] md:h-full bg-black "}>
                    <Image
                        src={"/ui/callcenter.jpg"}
                        className={"w-full h-full object-center"}
                    />
                </div>
                <div className={"flex-1 p-5 bg-white flex"}>
                    <form className={"w-full max-w-lg p-4 bg-white rounded-lg m-auto grid gap-2"}>
                        <Title c={'primary.8'} order={2}>Get free quote</Title>
                        <Title>No charge for your enquiry</Title>
                        <Text>Thank you for showing interest in our services. Simply pick a date and we will get back to
                            you.</Text>
                        <TextInput
                            label={"Name"}
                            placeholder={"Name/Organization"}
                            name={"name"}
                        />
                        <TextInput
                            label={"Email"}
                            placeholder={"Email address"}
                            name={"email"}
                        />
                        <DatePickerInput
                            label={"Pick date (Optional)"}
                            placeholder={"Choose when to get contacted"}
                        />
                        <Button>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
