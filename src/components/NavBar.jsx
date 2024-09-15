import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";


// Horizontal NavBar
export function NavBar() {
    function getActivePageCookie() {
        const activePageCookie = document.cookie;
        const activeIndex = activePageCookie.split(';').find((cookie) => cookie.includes('active'));
        
        if (activeIndex) {
            console.log(activeIndex);
            return parseInt(activeIndex.split('=')[1]);
        }
        return 0;
    }

    function setActivePageCookie(index) {
        document.cookie = `active=${index}; expires=${Date.now() + 600000}`;
    }
   
    const pages = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
        { name: "Shop", link: "/shop"},
    ];


    const [active, setActive] = useState(getActivePageCookie());
    const navigate = useNavigate();

    

    return (
        <div 
            className="flex flex-row justify-center items-center 
             text-[#ccac91] text-md"
        >
            {pages.map((page, index) => (
                <button
                    key={index}
                    className={`hover:bg-[#f2ebe5] py-1 px-5 m-2 rounded-full transition duration-300 
                    ease-in-out ${active === index ? 'ring-2 ring-[#dfd4ce]' : ''}`}
                    onClick={() => {
                        setActive(index);
                        setActivePageCookie(index);
                        navigate(page.link);
                    }}
                >
                    <b>{page.name}</b>
                </button>
            ))}
            <AiOutlineShoppingCart className="text-3xl m-5 hover:text-slate-500 rounded-full cursor-pointer" />
            <button className="m-3 py-1 px-2 flex flex-row justify-center items-center hover:bg-[#2f4171] border-2 rounded-md 
                transition duration-300 ease-in-out"
                onClick={() => navigate('/login')}
            >
                <b>Log In</b>
                <MdLogin className="ml-1 text-xl"/>
            </button>
            <button className="m-3 py-1 px-2 flex flex-row justify-center items-center text-[#8d745e] hover:bg-[#a3c0f1] border-2 rounded-md
                transition duration-300 ease-in-out"
            >
                
                <b>Sign Up</b>
                <HiOutlinePencilAlt className="ml-1  text-xl"/>
            </button>
            
        </div>
    );
}
