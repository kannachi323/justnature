import AUTH_ROUTES from './auth';
import MAIN_ROUTES from './main';
import USER_ROUTES from './user';

const ROUTES = [
  {
    path: "main",
    children: MAIN_ROUTES
  },
  {
    path: "user",
    children: USER_ROUTES 
  },
  {
    path: "auth",
    children: AUTH_ROUTES 
  }
];

export default ROUTES;
