import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import { AboutPage, ContactPage, GalleryPage, HomePage, ServicesPage, ShopPage } from './pages';

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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
    ],
  },
]);

export default Router;
