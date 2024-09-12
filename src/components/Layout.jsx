import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar'; 
import Logo from './Logo';

const Layout = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto">
            <Logo />
            <NavBar />
            <main>
                <Outlet /> {/* Renders the matched route component */}
            </main>
        </div>
    );
};

export default Layout;