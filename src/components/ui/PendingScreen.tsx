import {Flex, Image} from "@mantine/core";
import {FaSpinner} from "react-icons/fa";


export default function PendingScreen() {

    return (
        <Flex className={"w-full h-full min-h-screen"}>
            <div className={"w-max grid gap-2"}>
                <Image className={"w-[100px] object-contain"} src={'/logo.svg'}/>
                <FaSpinner className={"animate-spin"} />
            </div>
        </Flex>
    )
}

