import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaDownload, FaRegUser } from "react-icons/fa";
import { GrContactInfo, } from "react-icons/gr";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <Card className="w-full rounded-none scroll-mt-0 h-screen flex-row-reverse bg-no-repeat bg-cover bg-right-bottom" style={{marginTop:"-70px", backgroundImage: `linear-gradient(to right, #4568dc   , rgba(117, 19, 93, 0.73)), url("https://media.istockphoto.com/id/1137735902/vector/software-development-programming-laptop.jpg?s=612x612&w=0&k=20&c=0JmLIfnuHrmkJRhfjVq3ZSqpvqFuAVQ9-k93Su9nGTk=")` }}>
            <CardBody data-aos="fade-up"   className='w-full bg-[#162235] flex flex-col items-center justify-center' style={{ borderRadius: '0% 0% 100% 0%' }}>
                <Typography variant="h4" color="gray" className="text-4xl my-4  md:text-5xl font-extralight ">
                    Hey Folks!
                </Typography>
                <Typography variant="h4" color="gray" className="text-xl my-4  md:text-5xl font-extralight ">
                    It's
                    <strong className='uppercase ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#09009f] to-[#00ff95]'>
                        Mostofa Kamal
                    </strong>
                </Typography>
                <Typography variant="h4" color="gray" className="my-4 font-normal ">

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            "I'm a Frontnd Developer",
                            1000,
                            "I'm a ReactJS Developer",
                            1000,
                            "I'm a MERN Stack Developer",
                            1000,
                            "I'm a Juniour Full Stack Developer",
                            1000,
                        ]}
                        speed={50}
                        // style={{ fontSize: '1.875rem' }}
                        repeat={Infinity}
                        className="text-sm sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#09009f] to-[#00ff95]"
                    />
                </Typography>

                <div className="flex items-center gap-4 ">
                    <a href='#contact-section'>
                        <Button className="flex items-center gap-3 bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
                            <FaRegUser />
                            Contact Me
                        </Button>
                    </a>
                    <a href="Resume.pdf" download>
                        <Button variant="gradient" className="flex items-center gap-3 bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
                            <FaDownload />
                            My Resume
                        </Button>
                    </a>
                </div>
            </CardBody>
        </Card>
    );
}

export default Hero