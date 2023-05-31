import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import useCart from "../../../components/Hooks/useCart";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="fixed w-full z-20 top-0 left-0 ">
      <nav className="w-full max-w-7xl mx-auto bg-purple-500 bg-opacity-30 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <HiOutlineMenuAlt3 className="w-6 h-6 text-white font-bold"></HiOutlineMenuAlt3>
                  ) : (
                    <HiMenuAlt2 className="w-6 h-6 text-white font-bold"></HiMenuAlt2>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 text-white text-lg justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link to="/" active={"true"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/order/salad">Our Order</Link>
                </li>
                <li>
                  <Link href="/navbars">Contact</Link>
                </li>

                <Link to='/dashboard/userhome'><button
                  type="button"
                  className="inline-flex items-center px-5  text-sm font-medium text-center py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FaShoppingCart></FaShoppingCart>
                  <span className="inline-flex items-center justify-center w-4 h-4 ml-1 mb-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    {cart.length || 0}
                  </span>
                </button></Link>
              </ul>
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                {user ? (
                  <>
                    <Link
                      className="px-4 py-2 text-white bg-blue-400 rounded-md shadow hover:bg-gray-800"
                      onClick={handleLogOut}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {user ? (
              <>
                <Link
                  className="px-4 py-2 text-white bg-blue-400  rounded-md shadow hover:bg-gray-800"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
