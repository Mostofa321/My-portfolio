import { Typography } from '@material-tailwind/react'
import React from 'react'

const NavMenuItem = ({children, link}) => {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href={link} className="flex items-center text-white text-lg">
        {children}
      </a>
    </Typography>
  )
}

export default NavMenuItem