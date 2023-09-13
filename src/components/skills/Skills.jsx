import React from 'react'

import { Typography } from '@material-tailwind/react'
import { skills, tools } from './data'

const Skills = () => {


    return (
        <div id='skills-section' className='pt-16'>
            <div data-aos="fade-up"  className='container mx-auto bg-[#0d141f] p-5  rounded-2xl  '>
                <Typography variant="h4" color="gray" className="text-center  my-4  text-5xl font-semibold uppercase  text-transparent bg-clip-text bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
                    skills
                </Typography>

                {/* My Expertise Skills  */}
                <div data-aos="fade-up">
                    <div className='bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] mb-4'>
                        <div className='bg-[#0d141f]' style={{ borderRadius: '0% 0% 0% 100%' }}>
                            <Typography variant="h4" color="white" className="  text-2xl  " >
                                My Expertise Skills
                            </Typography>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10'>
                        {
                            skills.map((skill, index) => (
                                <div key={index} className='flex mx-4 sm:mx-[0] text-white text-2xl h-16 items-center  rounded-sm bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]'>
                                    <img src={skill.img} className='h-10 w-10 mx-4 rounded-full' alt='' />
                                    <h2 >{skill.name}</h2>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* Tools I Use  */}
                <div data-aos="fade-up">
                    <div className='bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] mb-4'>
                        <div className='bg-[#0d141f]' style={{ borderRadius: '0% 0% 0% 100%' }}>
                            <Typography variant="h4" color="white" className="  text-2xl  " >
                                Tools I Use
                            </Typography>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10'>
                        {
                            tools.map((tool, index) => (
                                <div key={index} className='flex mx-4 sm:mx-[0] text-white text-2xl h-16 items-center  rounded-sm bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]'>
                                    <img src={tool.img} className='h-10 w-10 mx-4 rounded-full' alt='' />
                                    <h2 >{tool.name}</h2>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills