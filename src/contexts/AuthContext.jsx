import React, { createContext, useState, useEffect } from 'react';
import { auth } from 'utils/firebase_utils/setup';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                await currentUser.reload();
                setUser(currentUser); // Set the updated user object
                setIsAuthenticated(true); // Mark the user as authenticated
            } else {
                setUser(null); // Clear the user state
                setIsAuthenticated(false); // Mark as unauthenticated
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
};
