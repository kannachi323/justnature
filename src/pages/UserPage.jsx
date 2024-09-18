import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { setActivePageCookie } from '../components/NavBar';

export default function UserPage() {
    const navigate = useNavigate();
    const { logoutUser, setIsAuthenticated } = useContext(AuthContext);

    async function handleLogoutAuth(event) {
        event.preventDefault();
        try {
            await logoutUser();
            setIsAuthenticated(false);
            navigate('/');
            setActivePageCookie(0);
        } catch (error) {

        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <button className="size-xl" onClick={handleLogoutAuth}>
                Logout
            </button>
        </div>
    )
}