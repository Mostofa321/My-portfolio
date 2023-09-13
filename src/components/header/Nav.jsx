import React from "react";
import Logo from '../../assets/logo.png'
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { FaBars, } from "react-icons/fa";
import { RxCross1, } from "react-icons/rx";
import NavList from "./NavMenu";

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Navbar className="z-10 border-0 sticky top-0 mx-auto rounded-none max-w-none px-4 lg:px-8 lg:py-1 bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
      <div className="lg:container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-4xl"
        >
          <img src={Logo} alt="logo" />
        </Typography>
        <div className="hidden lg:block text-white">{NavList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross1 className="text-4xl text-white" />
          ) : (
            <FaBars className="text-4xl text-white" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div onClick={() => setOpenNav(false)} className="container mx-auto">
          {NavList}
        </div>
      </Collapse>
    </Navbar>
  );
}