import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full z-20 top-0 left-0 ">
      <Navbar fluid={true} className="max-w-screen-xl    mx-auto p-4 bg-stone-300 bg-opacity-30">
      <Navbar.Brand to="/navbars">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" active={true}>
          Home
        </Link>
        <Link to="/menu">Menu</Link>
        <Navbar.Link href="/order">Our Order</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
