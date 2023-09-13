import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import profilePic from '../../assets/mostofa1.png'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";


const About = () => {
    return (
        <div id='about-section' className='pt-16'>
            <div className='w-full p-3 md:p-10 '>
                <Card data-aos="fade-up" className="md:container  shadow-[0 15px 25px rgba(0, 0, 0, .6)] mx-auto  max-w-[48rem] flex-col lg:flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-full bg-[#0d141f] lg:w-2/5 shrink-0 rounded-b-none md:rounded-lg md:rounded-b-none lg:rounded-r-none"
                    >
                        <img
                            src={profilePic}
                            alt="card-image"
                            className="h-80 w-80 rounded-full my-5 mx-auto object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="gray" className="mb-4 uppercase">
                            About Me
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Name: Mostofa Kamal
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            I am a Frontend web developer I'm trying to obtain a creative and challenging position that utilizes my current knowledge of web development. I am always willing to learn new technologies. I work well both independently and on a team.
                        </Typography>
                        <div className='flex items-center justify-around'>
                            <hr className='w-[20%] sm:w-[33%] border border-[black]' />
                            <div className="flex gap-4">
                                <a href='https://github.com/Mostofa321' target='blank'>
                                    <IconButton className="rounded-full hover:text-[black] hover:bg-[white] hover:ring-2 hover:ring-[black]  ">
                                        <PiGithubLogoFill className='text-2xl  ' />
                                    </IconButton>
                                </a>
                                <a href='https://www.linkedin.com/in/mostofa-kamal-shumon/' target='blank'>
                                    <IconButton className="rounded-full hover:text-[black] hover:bg-[white] hover:ring-2 hover:ring-[black]  ">
                                        <FaLinkedinIn className='text-2xl' />
                                    </IconButton>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100036711606747' target='blank'>
                                    <IconButton className="rounded-full hover:text-[black] hover:bg-[white] hover:ring-2 hover:ring-[black]  ">
                                        <FaFacebookF className="text-2xl" />
                                    </IconButton>
                                </a>
                            </div>
                            <hr className='w-[20%] sm:w-[33%] border border-[black]' />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default About