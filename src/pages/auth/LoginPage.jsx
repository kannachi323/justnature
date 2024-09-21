import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoNoText } from "components/Logos";
import FadeSlideInSection from "components/FadeSlideInSection";
import { AuthContext } from 'contexts/AuthContext';
import { loginUser } from 'utils/firebase_utils/auth';

export default function LoginPage() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
  
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext)
  
    async function handleLoginAuth(event) {
      event.preventDefault();
  
      const email = document.getElementById("user-email").value;
      const password = document.getElementById("user-password").value;
      const remember = document.getElementById("remember-me").checked;
  
      console.log('hello');
  
      try {
        await loginUser(email, password, remember);
        setIsAuthenticated(true);
        setShowSuccess(true);
        
        navigate("/");
        console.log(remember);
     
      } catch (error) {
        setShowError(true);
      }
    }
    
    return (
      <FadeSlideInSection className="h-full w-full flex flex-col justify-start items-center">
        <LogoNoText args="h-[20vh]" /> 
        <div className="flex flex-col justify-start items-center w-[30vw] bg-[#f5f5f3] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif] p-5">
        <h1 className="text-[#ccab8f] text-3xl font-extrabold text-center mb-3">Login</h1>
        <h2 className="text-[#ccab8f] text-md text-center" >Welcome back! Please login in here.</h2>
          <form className="text-[#ccab8f]" onSubmit={handleLoginAuth}>
            <strong>
              <label for="user-email">Email</label>
              <input type="email" id="user-email"className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
              <label for="user-password">Password</label>
              <input type="password" id="user-password" className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label for="remember-me">Remember me</label>
              <div className="flex flex-row justify-between items-center mt-10">
                <Link to="/register" className="hover:text-[#b3947b] text-sm">Forgot Password?</Link>
                <Link to="/register" className="hover:text-[#b3947b] text-sm">Don't have an account? Click here to register</Link>
              </div>
  
            </strong>
            
            
            <button type="submit" className="text-[#f5f5f3] bg-[#ccab8f] hover:bg-[#b3947b] rounded-md text-sm px-4 py-3 w-full !mt-6">Log In</button>
          </form>
        </div>
      </FadeSlideInSection>
      
    );
  }