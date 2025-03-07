import {ErrorComponentProps} from "@tanstack/react-router";
import {Button, Image, Text, Title} from "@mantine/core";

interface props extends ErrorComponentProps {}

export default function ErrorScreen({ error, reset }: props) {

    return (
        <div className={"w-full min-h-screen flex"}>
            <div className={"max-w-3/4 md:max-w-1/2 m-auto grid gap-2"}>
                <Image src={"/logo.svg"} className={"w-full h-full object-contain"} alt={"Zamar company logo"} />
                <Title>Oops something broke</Title>
                <Text>Sorry something went wrong!</Text>
                <Button onClick={reset} variant={"light"}>
                    Retry
                </Button>
            </div>
        </div>
    )
}

