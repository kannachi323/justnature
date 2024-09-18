import { createBrowserRouter } from 'react-router-dom';
import { ContactPage, GalleryPage, HomePage, ShopPage, LoginPage, RegisterPage, UserPage } from './pages'
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar'; 
import { LogoNoText } from './components/Logos';

function Layout() {
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


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      {
        index: true, // Default route for '/'
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      }
    ],
  },
]);

export default Router;
