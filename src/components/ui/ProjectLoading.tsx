import {Skeleton, Title} from "@mantine/core";


export default function ProjectLoading() {

    return (
        <div className={"flex flex-wrap min-h-[calc(100vh-70px)] gap-4 w-[95%] m-auto"}>
            <div className={"min-w-[250px] bg-white w-full md:w-max h-full md:sticky md:top-[75px] rounded-lg p-5 "}>
                <div className={"w-full h-max grid gap-2 transition-all duration-300"}>
                    <Title order={3}>Categories</Title>
                    <div className={'grid gap-2 w-full'}>
                        <Skeleton c={'primary'} className={"w-full rounded-full h-[40px]"}/>
                        <Skeleton className={"w-full rounded-full h-[40px]"}/>
                        <Skeleton className={"w-full rounded-full h-[40px]"}/>
                        <Skeleton className={"w-full rounded-full h-[40px]"}/>
                        <Skeleton className={"w-full rounded-full h-[40px]"}/>
                    </div>
                </div>
            </div>
            <div className={"flex-1 md:p-4 md:overflow-y-auto grid gap-4"}>
                <div className={"w-full grid auto-rows-max gap-2"}>
                    <Skeleton className={"w-1/2 md:w-1/3 h-[30px]"}/>
                    <div className={"w-full h-full !space-y-2 gap-2 columns-2 md:columns-4"}>
                        <Skeleton className={"w-full h-[30vh]"}/>
                        <Skeleton className={"w-full h-[25vh]"}/>
                        <Skeleton className={"w-full h-[40vh]"}/>
                        <Skeleton className={"w-full h-[28vh]"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

