import {Flex, Image} from "@mantine/core";
import {CgSpinner} from "react-icons/cg";


export default function PendingScreen() {

    return (
        <Flex className={"w-full h-full min-h-screen flex"}>
            <div className={"w-max grid align-middle justify-center gap-2 m-auto"}>
                <Image className={"max-w-md min-w-1/4 object-contain"} src={'/logo.svg'}/>
                <CgSpinner className={"  m-auto text-secondary text-5xl animate-[spin_0.5s_linear_infinite]"} />
            </div>
        </Flex>
    )
}

