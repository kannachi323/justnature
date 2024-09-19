import ContactPage from './ContactPage';
import GalleryPage from './GalleryPage';
import ShopPage from './ShopPage';
import HomePage from './HomePage';
import CheckoutPage from './CheckoutPage';
import USER_ROUTES from './user';
import AUTH_ROUTES from './auth';

const ROUTES = [
    { index: true, element: <HomePage /> },
    { path: "gallery", element: <GalleryPage /> },
    { path: "contact", element: <ContactPage /> },
    { path: "shop", element: <ShopPage /> },
    { path: "checkout", element: <CheckoutPage /> },
    { path: "user", children: USER_ROUTES },
    { path: "auth", children: AUTH_ROUTES },
  ];
  

export default ROUTES;