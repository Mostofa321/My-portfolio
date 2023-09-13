import React from 'react'
import NavMenuItem from './NavMenuItem'

const NavList = (
        <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavMenuItem link="/">
                Home
            </NavMenuItem>
            <NavMenuItem link="#about-section">
                About Me
            </NavMenuItem>
            <NavMenuItem link="#skills-section">
                Skills
            </NavMenuItem>
            <NavMenuItem link="#projects-section">
                Projects
            </NavMenuItem>
            <NavMenuItem link="#contact-section">
                Contact Me
            </NavMenuItem>
            <NavMenuItem>
                Blog
            </NavMenuItem>
        </ul>
    )


export default NavList