import {Button, Card, Image, Text, Title} from "@mantine/core";
import {useState} from "react";

interface props {
    service: ServicesObj
}

export default function ServiceCard({service}: props) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (active)
            // navigate
            return
        setActive(true);
    }
    return (
        <Card
            onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}
            className={"flex-1 min-w-[250px] p-0 md:min-h-[60vh] cursor-pointer"}>
            <Image
                src={service.image}
                alt={`sample image of ${service.service}`}
                className={"w-full h-full absolute object-cover"}
            />
            <div
                className={`w-full transition-all grid gap-2 absolute bottom-0 p-4 ${active ? "text-white bg-gradient-to-t from-primary-800 via-primary to-primary/30 " : "bg-white"}`}>
                <Title order={3}>{service.service}</Title>
                <Text className={"transition-all"}>{active ? service.description : ""}</Text>
                <Button color={active ? 'secondary' : 'primary'} className={'max-w-max'} onClick={handleClick}>
                    {active ? "Get quote" : "Learn more"}
                </Button>
            </div>
        </Card>
    )
}

