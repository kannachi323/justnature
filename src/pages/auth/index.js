import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const AUTH_ROUTES = [
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
]

export default AUTH_ROUTES;