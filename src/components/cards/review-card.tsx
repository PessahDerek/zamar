import {Avatar, Card, Image, Space, Text, Title} from "@mantine/core";


interface props {
    review: ReviewObj
}

export default function ReviewCard({review}: props) {


    return (
        <div className={"w-full grid cursor-pointer"}>
            <div className={"absolute w-full h-[calc(100%-50px)] bg-white rounded-md mt-auto bottom-0"}/>

            <Avatar variant={'filled'} color={'secondary.2'}
                    className={"w-[100px] h-[100px] shadow-lg ml-3"}
                    src={review.avi}>
                <Text c={'black'} className={"font-black text-2xl"} >{review.name?.split(" ")?.reduce((acc, curr) => acc + curr.at(0), "")}</Text>
            </Avatar>
            <div className={"p-4 pt-0"}>
                <Title order={4}>{review.name}</Title>
                <Text className={"italic"}>{review.position}</Text>
                <Space h={10}/>
                <Text>{review.review}</Text>
            </div>
        </div>
    )
}

