import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import profilePic from '../../assets/mostofa1.png'
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaDownload, FaRegUser } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <div id='contact-section' className='pt-16'>
            <div className='w-full p-3 md:p-10 '>
                <Card data-aos="fade-up" className="md:container  shadow-[0 15px 25px rgba(0, 0, 0, .6)] mx-auto  max-w-[48rem] flex-col lg:flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-full bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] lg:w-1/2 shrink-0 rounded-b-none md:rounded-lg md:rounded-b-none lg:rounded-r-none"
                    >
                        <ContactForm className="mx-auto" />
                    </CardHeader>
                    <CardBody className=' lg:w-1/2 flex flex-col items-center justify-center'>

                        <div>
                            <Typography variant="h4" color="gray" className="mb-4 uppercase">
                                Get in touch
                            </Typography>
                            <Typography className="flex items-center gap-3 mb-2 ">
                                <ImLocation />
                                Dhaka, Bangladesh
                            </Typography>
                            <Typography className="flex items-center gap-3 mb-2 ">
                                <FaWhatsapp />
                                +8801882580190
                            </Typography>
                            <Typography className="flex items-center gap-3 mb-2 ">
                                <MdEmail />
                                hmshumon123@gmail.com
                            </Typography>
                            <Typography className="flex items-center gap-3 mb-2 ">
                                <FaLinkedinIn />
                                https://www.linkedin.com/in/mostofa-kamal-shumon/
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Contact