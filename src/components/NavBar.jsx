import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Horizontal NavBar
export function NavBar() {
    const pages = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/gallery" },
        { name: "Services", link: "/services"},
        { name: "Shop", link: "/shop"},
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];


    const [active, setActive] = useState(0);

    const navigate = useNavigate();

    return (
        <div 
            className="w-[85vw] h-[6vh] bg-slate-700 flex flex-row justify-evenly items-center 
            rounded-xl p-3 m-3 mb-5 text-white text-lg"
        >
            {pages.map((page, index) => (
                <button
                    key={index}
                    className={`hover:bg-slate-500 py-2 px-5 rounded-full transition duration-300 
                    ease-in-out ${active === index ? 'ring-2 ring-gray-400' : ''}`}
                    onClick={() => {
                        setActive(index);
                        navigate(page.link);
                    }}
                >
                    {page.name}
                </button>
            ))}
        </div>
    );
}
