import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoNoText } from "../components/Logos";
import FadeSlideInSection from "../components/FadeSlideInSection";
import { SuccessPopup, ErrorPopup } from "../components/Popups";
import { AuthContext } from '../contexts/AuthContext';

export function LoginPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const { loginUser, setIsAuthenticated } = useContext(AuthContext)

  async function handleLoginAuth(event) {
    event.preventDefault();

    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    const remember = document.getElementById("remember-me").checked;

    

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

export function RegisterPage() {
  const navigate = useNavigate();
  const [termsVisible, setTermsVisible] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  function checkPasswordMatch() {
    setPasswordMatch(document.getElementById("user-password").value === document.getElementById("confirm-password").value);
  }

  const { registerUser } = useContext(AuthContext);
  
  async function handleRegisterAuth(event) {
    event.preventDefault();

    
    const password = document.getElementById("user-password").value;
    const email = document.getElementById("user-email").value;
    
    if (!passwordMatch) {
      setShowError(true);
      return;
    }
    
    try {
      await registerUser(email, password);
      setShowSuccess(true);
      navigate('/login');
    } catch (error) {
      setShowError(true);
    }
  }

  return (
    <FadeSlideInSection className="h-full w-full flex flex-col justify-start items-center">
      <LogoNoText args="h-[20vh]" /> 
      <div className="flex flex-col justify-start items-center w-[30vw] bg-[#f5f5f3] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif] p-5">
        <h1 className="text-[#ccab8f] text-3xl font-extrabold text-center mb-3">Create your account</h1>
        <h2 className="text-[#ccab8f] text-md text-center">Welcome to Just Nature</h2>
        
        <form className="text-[#ccab8f]" onSubmit={handleRegisterAuth}>
          <strong>
            <label htmlFor="user-name">Username</label>
            <input type="text" id="user-name" className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
            
            <label htmlFor="user-email">Email</label>
            <input type="email" id="user-email" className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
            
            <label htmlFor="user-password">Password</label>
            <input type="password" id="user-password" className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
            
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]"
              onChange={checkPasswordMatch}
            />

            {!passwordMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
            
            <div className="flex items-center my-2">
              <input type="checkbox" id="remember-me" className="mr-2 accent-red-500" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            
            <div className="flex items-center my-2">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I agree to the <button type="button" onClick={() => setTermsVisible(!termsVisible)} className="hover:text-[#b3947b]"><u>Terms of Service</u></button>
              </label>
            </div>
          </strong>
          
          <button type="submit" className="text-[#f5f5f3] bg-[#ccab8f] hover:bg-[#b3947b] rounded-md text-sm px-4 py-3 w-full mt-6">Register</button>
        </form>
      </div>
      
      {termsVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[60vw] max-h-[80vh] p-6 rounded-md shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <div className="text-gray-700">
              {/* Your Terms of Service Content Here */}
              <p className="mb-4"><strong>Effective Date:</strong> 9/14/2024</p>
              <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By creating an account or using our services, you agree to be bound by these Terms of Service, as well as our Privacy Policy. 
                If you do not agree, please do not use our services.
              </p>
              {/* Add the rest of your terms content here */}
              <button
                className="mt-4 px-4 py-2 bg-[#ccab8f] hover:bg-[#b3947b] text-white rounded-md"
                onClick={() => setTermsVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </FadeSlideInSection>
  );
}
