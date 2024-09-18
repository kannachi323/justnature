import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../contexts/AuthContext';



export function setActivePageCookie(index) {
    document.cookie = `active=${index}; expires=${new Date(Date.now() + 600000).toUTCString()}`;
}

// Horizontal NavBar
export function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const pages = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
        { name: "Shop", link: "/shop" },
    ];

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
            {isAuthenticated ? (
                <button className="m-3 py-1 px-2 flex flex-row justify-center items-center text-[#8d745e] hover:bg-[#f2ebe5] border-2 rounded-md
                    transition duration-300 ease-in-out"
                    onClick={() => navigate('/user')}
                >
                    
                    <CgProfile className="ml-1 text-xl"/>
                    <b>Profile</b>
                </button>  
            ) : (
                <>
                    <button className="m-3 py-1 px-2 flex flex-row justify-center items-center hover:bg-[#f2ebe5] border-2 rounded-md 
                      transition duration-300 ease-in-out"
                      onClick={() => navigate('/login')}
                    >
                        <b>Log In</b>
                        <MdLogin className="ml-1 text-xl"/>
                    </button>
                    <button className="m-3 py-1 px-2 flex flex-row justify-center items-center text-[#8d745e] hover:bg-[#f2ebe5] border-2 rounded-md
                        transition duration-300 ease-in-out"
                        onClick={() => navigate('/register')}
                    >
                        <b>Sign Up</b>
                        <HiOutlinePencilAlt className="ml-1 text-xl"/>
                    </button>
                </>
            )}
        </div>
    );
}
