import ContactPage from './ContactPage';
import GalleryPage from './GalleryPage';
import ShopPage from './ShopPage';
import HomePage from './HomePage';

const MAIN_ROUTES = [
    { path: "home", element: <HomePage /> },
    { path: "gallery", element: <GalleryPage /> },
    { path: "contact", element: <ContactPage /> },
    { path: "shop", element: <ShopPage /> },
  ];
  

export default MAIN_ROUTES;