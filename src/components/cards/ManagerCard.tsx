import {Avatar, Text, Title} from "@mantine/core";
import DOMPurify from "dompurify";
import pb from "../../libs/instances/pocketbase";


interface props {
    leader: LeaderObj
}

export default function ManagerCard({leader}: props) {

    const story = DOMPurify().sanitize(leader.member_story)

    return (
        <div className={"md:columns-2 bg-white p-4"}>
            <div className={"w-full h-max text-primary break-inside-avoid-column"}>
                <Avatar
                    src={`${pb.baseURL}/api/files/${leader.collectionId}/${leader.id}/${leader.photo}`}
                    className={"w-[30vh] h-[30vh]"}
                    classNames={{image: "object-contain"}}
                    >
                    <Text className={"font-bold"}>{leader.member_name.split(" ").reduce((acc, curr)=>` ${acc}${curr.at(0)}`, "")}</Text>
                </Avatar>
                <Title order={5}>{leader.member_name}</Title>
                <Text className={"italic"}>{leader.position}</Text>
            </div>
            <div className={"flex-1"}>
                <div dangerouslySetInnerHTML={{__html: story}}></div>
            </div>
        </div>
    )
}
