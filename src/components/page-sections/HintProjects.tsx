import {Button, Image, Space, Text} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {BsArrowRight} from "react-icons/bs";


export default function HintProjects() {

    return (
        <div className={"w-full"}>
            <div className={"w-full min-h-[50vh] md:h-[calc(100vh-70px)] flex"}>
                <Image className={"w-full h-full rounded-none absolute object-top"}
                       src={"/ui/projects.png"} alt={"list of our projects"}/>
                <div className={"w-full h-[90%] bg-gradient-to-b absolute from-bg via-bg"}/>
                <div className={"w-[95%] m-auto text-primary-700 mt-0 font-bold"}>
                    <h3 className={"font-black text-[15vmin] break-words "}>
                        Undeniable quality</h3>
                    <Text>
                        Every project we undertake is a fusion of creativity, strategy, and precision. From eye-catching
                        visuals to compelling campaigns, our work speaks for itself. Explore our portfolio and see how
                        we’ve helped brands make a lasting impact.
                    </Text>
                    <Space h={20}/>
                    <Link to={"/projects"} search={{category: "all", sub: undefined}}>
                        <Button rightSection={<BsArrowRight/>} color={'accent'} variant={'filled'}>
                            See our projects
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

