import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar'; 
import { Logo } from './Logos';

const Layout = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-start text-opacity-60 font-roboto">
            {/* Container for Logo and NavBar */}
            <div className="h-[9vh] w-full flex flex-row items-center justify-between bg-[#ffffff]">
                <Logo />
                <NavBar />
            </div>
            
            {/* Main content area */}
            <main className="w-full overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;