import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoNoText } from "../../components/Logos";
import FadeSlideInSection from "../../components/FadeSlideInSection";
import { SuccessPopup, ErrorPopup } from "../../components/Popups";
import { AuthContext } from '../../contexts/AuthContext';
import { loginUser, registerUser } from '../../utils/firebase/auth';



export default function RegisterPage() {
  const navigate = useNavigate();
  const [termsVisible, setTermsVisible] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  function checkPasswordMatch() {
    setPasswordMatch(document.getElementById("user-password").value === document.getElementById("confirm-password").value);
  }
  
  async function handleRegisterAuth(event) {
    event.preventDefault();

    
    const password = document.getElementById("user-password").value;
    const email = document.getElementById("user-email").value;
    const username = document.getElementById("user-name").value;
    
    if (!passwordMatch) {
      return;
    }

    else if (!document.getElementById("terms").checked) {
      return;
    }
    
    try {
      await registerUser(email, password, username);
      navigate('/login');
    } catch (error) {
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
