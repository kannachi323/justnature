import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../contexts/AuthContext';
import { logoutUser } from 'utils/firebase_utils/auth';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


// Horizontal NavBar
export function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const itemCount = 0;

    const pages = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
        { name: "Shop", link: "/shop" },
    ];

    const userOptions = [
        { name: "Account", link: "/user/account" },
        { name: "Orders", link: "/user/orders" },
        { name: "Watchlist", link: "/user/watchlist" },
    ]

    async function handleLogoutAuth() {
      try {
        await logoutUser();
        navigate("/");
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
      
      
    }


    return (
        <div className="flex flex-row justify-center items-center text-[#ccac91] text-lg px-5">
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
            <button className="text-2xl m-3 py-1 px-2 flex flex-row justify-center items-center hover:bg-[#f2ebe5] rounded-md"
              onClick={() => navigate("/checkout")}
            >
              <AiOutlineShoppingCart />
              <b className="text-lg ml-1">Cart {itemCount} </b>
            </button>
        
            {!isAuthenticated ? (
              <>
               <button className="m-3 py-1 px-2 flex flex-row justify-center items-center hover:bg-[#f2ebe5] border-2 rounded-md 
                 transition duration-300 ease-in-out"
                 onClick={() => navigate('/auth/login')}
               >
                   <b>Log In</b>
                   <MdLogin className="ml-1 text-xl"/>
               </button>
               <button className="m-3 py-1 px-2 flex flex-row justify-center items-center text-[#8d745e] hover:bg-[#f2ebe5] border-2 rounded-md
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
            { isProfileHovered &&
              <div className="absolute flex flex-col items-start justify-center left-[88vw] top-[6vh] w-48 bg-white border-[#8d745e] border-2 rounded-lg shadow-lg p-4 z-[99]"
                onMouseEnter={() => setIsProfileHovered(true)} 
                onMouseLeave={() => setIsProfileHovered(false)}
                >
                <ul className="w-full">
                  {userOptions.map((option, index) => (
                    <li
                      className="cursor-pointer border-b border-transparent hover:border-[#8d745e] transition-all duration-300 ease-in-out px-3 py-2 my-1 rounded-lg hover:bg-[#f5f5f5] hover:shadow-sm"
                      key={index}
                      onClick={() => navigate(option.link)}
                    >
                      {option.name}
                    </li>
                  ))}
                  <li 
                    className="cursor-pointer border-b border-transparent hover:border-[#8d745e] transition-all duration-300 ease-in-out px-3 py-2 my-1 rounded-lg hover:bg-[#f5f5f5] hover:shadow-sm"
                    onClick={handleLogoutAuth}
                  >
                    Log out
                  </li>
                </ul>
              </div>
            }
        </div>
    );
}

