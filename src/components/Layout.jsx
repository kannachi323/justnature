import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar'; 
import { LogoNoText } from './Logos';

const Layout = () => {
    return (
        <>
            {/* Container for Logo and NavBar */}
            <div className="h-[9vh] w-full flex flex-row items-center justify-between bg-[#ffffff]">
                <LogoNoText args="h-full w-[20%]"/>
                <NavBar />
            </div>
            
            {/* Main content area */}
            <main className="w-full overflow-x-hidden">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;