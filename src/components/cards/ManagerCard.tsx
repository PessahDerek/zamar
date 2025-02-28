import {Image, Text, Title} from "@mantine/core";


interface props {
    leader: LeaderObj
}

export default function ManagerCard({leader}: props) {

    return (
        <div className={"columns-2 bg-white break-inside-avoid-column p-4"}>
            <div className={"w-[150px] h-full col-span-1 text-primary break-inside-avoid-column"}>
                <Image
                    src={leader.avi}
                    alt={`Photo of ${leader.name}}`}
                    className={"w-full h-[150px] object-contain object-center"}
                />
                <Title order={5}>{leader.name}</Title>
                <Text className={"italic"}>{leader.position}</Text>
            </div>
            <div className={"flex-1 col-span-2"}>
                <Text>{leader.description}</Text>
            </div>
        </div>
    )
}
