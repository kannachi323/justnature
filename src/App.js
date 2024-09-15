import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import { ContactPage, GalleryPage, HomePage, ShopPage, LoginButton } from './pages';

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
        element: <LoginButton />,
      }
    ],
  },
]);

export default Router;
