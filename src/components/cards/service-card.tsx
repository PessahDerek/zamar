import {Button, Card, Image, Text, Title} from "@mantine/core";
import {useState} from "react";
import pb from "../../libs/instances/pocketbase";
import {useNavigate} from "@tanstack/react-router";

interface props {
    service: ServicesObj
}

export default function ServiceCard({service}: props) {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (active)
            // navigate
            return navigate({to: "/quote"})
        setActive(true);
    }
    return (
        <Card
            onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}
            className={"flex-1 min-w-[250px] min-h-[40vh] p-0 md:min-h-[60vh] cursor-pointer"}>
            <Image
                src={`${pb.baseURL}/api/files/${service.collectionId}/${service.id}/${service.image}`}
                alt={`sample image of ${service.title}`}
                className={"w-full h-full absolute object-cover"}
            />
            <div
                className={`w-full grid gap-2 absolute bottom-0 p-4 ${active ? "text-white bg-gradient-to-t from-primary-800 via-primary to-primary/30 " : "bg-white"}`}>
                <Title c={active ? '': "primary.7"} order={3}>{service.title}</Title>
                <Text className={`transition-all duration-300 ${active ? "h-max": "h-0 overflow-hidden"}`}>{service.content}</Text>
                <Button color={active ? 'secondary' : 'primary'} className={'max-w-max'} onClick={handleClick}>
                    {active ? "Get quote" : "Learn more"}
                </Button>
            </div>
        </Card>
    )
}

