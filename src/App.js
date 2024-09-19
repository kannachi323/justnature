import { createBrowserRouter, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar'; 
import { LogoNoText } from './components/Logos';
import ROUTES from './pages';

function App() {
  //todo: perform maintenance tasks, get database connection, etc.
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);

  return (
      <>
          {/* Container for Logo and NavBar */}
          <div className="h-[9vh] w-full flex flex-row items-center justify-between bg-[#ffffff]">
              <LogoNoText args="h-full w-[20%]"/>
              <NavBar />
          </div>
          
          {/* Main content area */}
          <main className="w-screen h-screen">
              <Outlet />
          </main>
      </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ROUTES
  }
]);

export default router;
