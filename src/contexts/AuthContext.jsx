import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/setup';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // To hold the user object if needed

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user exists");
                setUser(user.displayName); // Set the user state when authenticated
                setIsAuthenticated(true); // Mark the user as authenticated
            } else {
                setUser(null); // Clear user state when signed out
                setIsAuthenticated(false); // Mark as unauthenticated
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
