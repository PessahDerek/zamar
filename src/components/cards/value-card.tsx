import {IconType} from "react-icons";
import {Flex, Title} from "@mantine/core";
import {BiSolidBinoculars} from "react-icons/bi";
import {FaHandHoldingHeart} from "react-icons/fa6";
import {TbTargetArrow} from "react-icons/tb";
import {useState} from "react";
import DOMPurify from "dompurify";


interface props {
    value: ValueObj
}

export default function ValueCard({value: {title, description}}: props) {
    const Icon: IconType = title.toLowerCase().includes('vision')
        ? BiSolidBinoculars :
        title.toLowerCase().includes("mis") ? TbTargetArrow : FaHandHoldingHeart

    const [hover, setHover] = useState(false);
    const display = DOMPurify.sanitize(description)

    return (
        <Flex onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
              className={"flex gap-4 cursor-pointer flex-1 min-w-[300px] bg-white p-10 hover:shadow-xl hover:scale-[98%] transition-all "}>
            <div className={"w-[70px] h-[70px] m-auto flex"}>
                <div
                    className={`absolute blur-xl ${hover ? "bg-accent" : "bg-primary"} w-3/4 h-3/4 top-0 bottom-0 left-0 right-0 m-auto rounded-full`}/>
                <Icon size={'4vmax'} className={"m-auto text-white"}/>
            </div>
            <div className={"flex-1 m-auto"}>
                <Title order={4}>{title}</Title>
                <div dangerouslySetInnerHTML={{__html: display}}></div>
            </div>
        </Flex>
    )
}

