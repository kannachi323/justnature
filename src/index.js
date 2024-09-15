import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-velx0rij68nzpyod.us.auth0.com"
    clientId="2DKslDL6YuLndABd67EEcAOnUdens6eV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RouterProvider router={Router} />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
