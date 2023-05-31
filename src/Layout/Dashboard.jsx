import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdReviews, MdPlaylistPlay, MdMail } from "react-icons/md";
import {
  FaCalendarAlt,
  FaHome,
  FaWallet,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import { Footer } from "flowbite-react";
import useCart from "../components/Hooks/useCart";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [cart] = useCart()
  return (
    <div>
      <div className="flex gap-4">
        <div
          className={` ${
            open ? "w-40" : "w-72 "
          } flex flex-col p-3 bg-[#D1A054;] shadow duration-300`}
        >
          <div className="space-y-1 ">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold ">Dashboard</h2>
              <button onClick={() => setOpen(!open)}>
                <HiOutlineMenuAlt3 className="w-6 h-6 "></HiOutlineMenuAlt3>
              </button>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm navlink">
                <li className="rounded-sm ">
                  <NavLink to='userhome' className="flex items-center p-2 space-x-3 rounded-md">
                    <FaHome className="w-6 h-6 "></FaHome>
                    <span className="uppercase font-semibold text-base">
                      User Home
                    </span>
                  </NavLink>
                </li>
                
                <li className="rounded-sm">
                  <NavLink to='reservation' className="flex items-center p-2 space-x-3 rounded-md">
                    <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                    <span className="uppercase font-semibold text-base">
                    reservation
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink to='paymentHistory' className="flex items-center p-2 space-x-3 rounded-md">
                    <FaWallet className="w-6 h-6 "></FaWallet>
                    <span className="uppercase  font-semibold text-base">
                      Payment History
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink to='mycart' className="flex items-center p-2 space-x-3 rounded-md">
                    <FaShoppingCart className="w-6 h-6 "></FaShoppingCart>
                    <span className=" uppercase  font-semibold text-base">
                    my cart
                    
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-1 mb-2 text-xs font-semibold text-blue-800  bg-blue-200 rounded-full">
                    {cart.length || 0}
                  </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                <NavLink to='addReview' className="flex items-center p-2 space-x-3 rounded-md">
                    <MdReviews className="w-6 h-6 "></MdReviews>
                    <span className=" uppercase  font-semibold text-base">
                    add review
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                <NavLink to='booking' className="flex items-center p-2 space-x-3 rounded-md">
                    <MdPlaylistPlay className="w-6 h-6 "></MdPlaylistPlay>
                    <span className=" uppercase  font-semibold text-base">
                    my booking
                    </span>
                  </NavLink>
                </li>
              </ul>
              <Footer.Divider />
              <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm ">
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <FaHome className="w-6 h-6 "></FaHome>
                    <span className="uppercase  font-semibold text-base">
                     Home
                    </span>
                  </NavLink>
                </li>
                
                <li className="rounded-sm">
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <HiOutlineMenu className="w-6 h-6 "></HiOutlineMenu>
                    <span className=" font-semibold text-base">
                    menu
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <FaShoppingBag className="w-6 h-6 "></FaShoppingBag>
                    <span className="uppercase  font-semibold text-base">
                     Shop
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <MdMail className="w-6 h-6 "></MdMail>
                    <span className=" uppercase  font-semibold text-base">
                    Contact
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
            </div>
          </div>
          
        </div>


        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
