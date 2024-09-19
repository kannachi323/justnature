import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../contexts/AuthContext';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


// Horizontal NavBar
export function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); //should get from user prefs

    const pages = [
        { name: "Home", link: "/main/home" },
        { name: "Gallery", link: "/main/gallery" },
        { name: "Contact", link: "/main/contact" },
        { name: "Shop", link: "/main/shop" },
    ];

    const userOptions = [
        { name: "Account", link: "/user/account" },
        { name: "Orders", link: "/user/orders" },
        { name: "Watchlist", link: "/user/watchlist" },
        { name: "Settings", link: "/user/settings" },
    ]

    return (
        <div className="flex flex-row justify-center items-center text-[#ccac91] text-md px-5">
            {pages.map((page, index) => (
                <button
                    key={index}
                    className="hover:bg-[#f2ebe5] py-1 px-5 m-2 rounded-full transition duration-300 ease-in-out"
                    onClick={() => {
                        navigate(page.link);
                    }}
                >
                    <b>{page.name}</b>
                </button>
            ))}
            <AiOutlineShoppingCart className="text-3xl m-5 hover:text-[#8d745e] rounded-full cursor-pointer" />
            {!isAuthenticated ? (
              <>
               <button className="m-3 py-1 px-2 flex flex-row justify-center items-center hover:bg-[#f2ebe5] border-2 rounded-md 
                 transition duration-300 ease-in-out"
                 onClick={() => navigate('/auth/login')}
               >
                   <b>Log In</b>
                   <MdLogin className="ml-1 text-xl"/>
               </button>
               <button className="m-3 py-1 px-2 flex flex-row justify-center items-center text-[#8d745e] hover:bg-[#f2ebe5] rounded-md
                   transition duration-300 ease-in-out"
                   onClick={() => navigate('/auth/register')}
               >
                   <b>Sign Up</b>
                   <HiOutlinePencilAlt className="ml-1 text-xl"/>
               </button>
              </>

            
                
            ) : (
                

              <CgProfile className="m-5 text-3xl transition duration-300 ease-in-out hover:text-[#8d745e] cursor-pointer"
              onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}
              />

            )}
            {
              <div className="absolute flex flex-col items-start justify-center left-[90vw] top-[6vh] w-[8vw] bg-white border-[#8d745e] border-2
                rounded-lg"
                onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)}
              >
                <ul>
                  {userOptions.map((option, index) => (
                    
                    <li className="cursor-pointer hover:bg-[#f2ebe5] py-1 px-3 m-2 rounded-full transition duration-300 ease-in-out"
                      key={index}
                      onClick={() => navigate(option.link)}
                    >
                      {option.name}
                    </li>
                  
                  ))}
                  
                  
                  
                </ul>
              </div>
            }
        </div>
    );
}

