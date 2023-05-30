import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
  }
  return (
    <div className="fixed w-full z-20 top-0 left-0 ">
      <Navbar fluid={true} className="custom max-w-screen-xl mx-auto p-4 bg-opacity-50">
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
      <Navbar.Collapse className="text-white">
        <Link to="/" active={'true'}>
          Home
        </Link>
        <Link to="/menu">Menu</Link>
        <Link href="/order/salad">Our Order</Link>
        <Link href="/navbars">Contact</Link>
        {
          user ? <><Link onClick={handleLogOut}>Logout</Link></>:<><Link to='/login'>Login</Link></>
        }
        
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
