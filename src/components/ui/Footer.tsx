import {Anchor, Card, Image, Space, Text, Title} from "@mantine/core";
import {FaFacebook} from "react-icons/fa";
import {BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp} from "react-icons/bs";

export default function Footer() {

    return (
        <footer className={"w-full h-max pt-10 grid gap-5 text-white bg-primary-800"}>
            {/*<div className={"w-[95%] m-auto flex gap-4"}>*/}
            {/*    <Card className={"w-[150px] h-[150px]"}>*/}
            {/*        <Image className={"w-full h-full object-contain m-auto"} src={"/logo.svg"}/>*/}
            {/*    </Card>*/}
            {/*    <div className={"w-max grid auto-rows-max gap-2"}>*/}
            {/*        <Title order={4}>Location</Title>*/}
            {/*        <Text>Ramco courts</Text>*/}
            {/*    </div>*/}
            {/*    /!*<iframe*!/*/}
            {/*    /!*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7615573288426!2d36.832766624965785!3d-1.3187408486687486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b005f6a0ab%3A0x22bcff8d667d8146!2sRamco%20Courts%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1740712528683!5m2!1sen!2ske"*!/*/}
            {/*    /!*    width="600" height="450" className={"w-max h-[40vh] rounded-lg"} allowFullScreen loading="lazy"*!/*/}
            {/*    /!*    referrerPolicy="no-referrer-when-downgrade"></iframe>*!/*/}
            {/*</div>*/}
            <div className={"w-full h-max flex gap-2 p-2.5 px-[2.5%] text-left bg-primary-700"}>
                <Text className={"my-auto"}>&copy;{new Date().getFullYear()} Zamar Solution</Text>
                <div className={"flex gap-4 my-auto h-max ml-auto justify-around"}>
                    <a className={""} target={"_blank"} href="/">
                        <FaFacebook className={"text-xl"}/>
                    </a>
                    <a className={""} target={"_blank"} href="/">
                        <BsInstagram className={"text-xl"}/>
                    </a>
                    <a className={""} target={"_blank"} href="/">
                        <BsTwitterX className={"text-xl"}/>
                    </a>
                    <a className={""} target={"_blank"} href="/">
                        <BsWhatsapp className={"text-xl"}/>
                    </a>
                    <a className={""} target={"_blank"} href={"https://ke.linkedin.com/in/zamar-solutions-limited-025bbb34a"}>
                        <BsLinkedin className={"text-xl"} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

