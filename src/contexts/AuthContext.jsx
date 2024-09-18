import React, { createContext, useState } from 'react';
import { loginUser, logoutUser, registerUser } from '../firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loginUser, logoutUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};
