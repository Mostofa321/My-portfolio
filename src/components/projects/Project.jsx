import React from 'react'
import { Button, Card, CardBody, CardHeader, Carousel, Typography } from '@material-tailwind/react'
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Project = ({ data }) => {
    const { title, subTitle, images, gitHubLink, liveLink, features, usedTechnologies } = data || {}

    return (
        <div className='w-full p-3' >
            <Card data-aos="flip-up" className="md:container bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] shadow-[0 15px 25px rgba(0, 0, 0, .6)] mx-auto  max-w-[48rem] flex-col lg:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-full bg-[#0d141f] lg:w-1/2 shrink-0 rounded-b-none md:rounded-lg md:rounded-b-none lg:rounded-r-none"
                >
                    {/* Project Images Carosell  */}
                    <Carousel autoplay loop className="">
                        {
                            images?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="image"
                                    className="h-full w-full "
                                />
                            ))
                        }
                    </Carousel>
                </CardHeader>
                <CardBody className=' '>
                    {/* Project Title  */}
                    <Typography variant="h4" color="white" className="font-semibold text-center">
                        {title}
                    </Typography>
                    {/* Project Sub Title  */}
                    <Typography variant="h5" color="white" className="mb-2 font-light text-center">
                        {subTitle}
                    </Typography>
                    {/* GitHub and Live Link Buttons  */}
                    <div className="flex  items-center justify-center gap-4 mb-5">
                        <a href={gitHubLink} >
                            <Button variant="gradient" className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500">
                                <BsGithub />
                                GitHub
                            </Button>
                        </a>
                        <a href={liveLink} >
                            <Button variant="gradient" className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500">
                                <BiLink />
                                Live Link
                            </Button>
                        </a>
                    </div>
                    {/* features  */}
                    <Typography variant="h5" color="white" className="mb-2 font-semibold">
                        Features :
                    </Typography>
                    <ul className='ml-6 list-disc'>
                        {
                            features?.map((feature, index) => (
                                <li key={index} className='leading-7 text-[white]'>
                                    {feature}
                                </li>
                            ))
                        }
                    </ul>
                    <Typography variant="paragraph" color="gray" className="mt-3 text-[white]">
                        <strong className='font-bold'>Used Technologies : </strong> 
                        {
                            usedTechnologies.map((technology, index) => (
                                `${technology}, `
                            ))
                        }
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default Project