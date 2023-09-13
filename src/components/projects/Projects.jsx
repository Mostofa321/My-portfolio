import { Button, Card, CardBody, CardHeader, Carousel, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import Project from './Project'
import { projectsData } from './data'

const Projects = () => {
    return (
        <div id='projects-section' className='container mx-auto pt-20'>
            {/* project sections title  */}
            <div className='bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] mb-4'>
                <div className='bg-[#243a54]' style={{ borderRadius: '0% 0% 0% 100%' }}>
                    <Typography variant="h4" color="white" className="  text-4xl font-semibold uppercase " >
                        My Projects
                    </Typography>
                </div>
            </div>

            {/* Projects  */}
            {
                projectsData.map((data, index) => (
                    <Project key={index} data={data} />
                ))
            }

        </div>
    )
}

export default Projects