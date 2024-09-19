import React, { useState } from 'react';
import { LogoNoText } from 'components/Logos';
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import FadeSlideInSection from "components/FadeSlideInSection";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ContactPage() {

    return (
        <div className="flex-col flex items-center justify-center">
            <FadeSlideInSection>
                <LogoNoText args="h-[30vh]" /> 
            </FadeSlideInSection>
            
            <FadeSlideInSection>
                <div className="mb-6 grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-[60vw] bg-[#f5f5f3] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <div>
                        <h1 className="text-[#ccab8f] text-3xl font-extrabold text-center">Contact Us</h1>
                        <p className="text-sm text-[#8c7a66] mt-4">
                            Have any questions? Feel free to reach out to us using the contact form. We will get back to you as soon as possible.
                        </p>
                        <ul className="flex flex-col text-[#ccab8f] mt-5">
                            <li className="flex flex-row items-center justify-start mb-5">
                                <GrLocation className="text-[#ccab8f] text-3xl mr-3" />
                                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/i6xyPuQfLktDwMVZ7">107 E Huntington Dr. Arcadia CA, 91006</a>
                            </li>
                            <li className="flex flex-row items-center justify-start mb-5">
                                <AiOutlineMail className="text-3xl text-[#ccab8f] mr-3" />
                                <p>justnatureusa@gmail.com</p>
                            </li>  
                            <li className="flex flex-row items-center justify-start mb-5">
                                <FiPhone className="text-3xl text-[#ccab8f] mr-3" />
                                <p>(626) 446-6788</p>
                            </li>  
                        </ul>
                        
                    </div>

                    <form className="ml-auto space-y-4">
                        <input type='text' placeholder='Name'
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
                        <input type='email' placeholder='Email'
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
                        <input type='text' placeholder='Subject'
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#ccab8f]" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-[#ccab8f]"></textarea>
                        <button type='button'
                            className="text-[#f5f5f3] bg-[#ccab8f] hover:bg-[#b3947b] rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                    </form>
                </div>
            </FadeSlideInSection>

            <FadeSlideInSection>
                <div className="flex flex-col items-center justify-start mb-6 p-5 w-[60vw] bg-[#f5f5f3] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                  <h1 className="text-[#ccab8f] text-2xl font-extrabold text-center">Schedule an Appointment</h1>
                        <p className="text-sm text-[#8c7a66] mt-2 text-center">
                            Want to visit our store?       
                            <a className="underline inline-flex items-center ml-1" href="https://forms.gle/tPKxm1GwSWEL2Z887" target="_blank" rel="noopener noreferrer">
                              Click here to access our appointment form and schedule a visit.
                              <FaExternalLinkAlt className="text-[#ccab8f] text-center ml-1">Link</FaExternalLinkAlt>
                            </a>
                        </p>
                        
                    
                </div>
            </FadeSlideInSection>
            
            <FadeSlideInSection>
                <div className="flex flex-col items-center justify-start mb-6 w-[60vw] bg-[#f5f5f3] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <h1 className="text-[#ccab8f] text-3xl text-center font-extrabold p-5 pb-0">Hours of Operation</h1>
                    <h2 className="text-center p-0 text-[#ac9d92]"><i>by appointment only</i></h2>
                    <div className="flex w-full justify-evenly pt-3">
                        <ul className="flex flex-col justify-evenly items-start pl-10 text-[#807162]">
                            <li className="mb-3">Monday</li>
                            <li className="mb-3">Tuesday</li>
                            <li className="mb-3">Wednesday</li>
                            <li className="mb-3">Thursday</li>
                            <li className="mb-3">Friday</li>
                            <li className="mb-3">Saturday</li>
                            <li className="mb-3">Sunday</li>
                        </ul>

                        <ul className="flex flex-col justify-evenly items-end pr-10 text-[#807162]">
                            <li className="mb-3">9:00 AM - 5:00 PM</li>
                            <li className="mb-3">9:00 AM - 5:00 PM</li>
                            <li className="mb-3">9:00 AM - 5:00 PM</li>
                            <li className="mb-3">9:00 AM - 5:00 PM</li>
                            <li className="mb-3">10:00 AM - 5:00 PM</li>
                            <li className="mb-3">10:00 AM - 5:00 PM</li>
                            <li className="mb-3">Closed</li>
                        </ul>
                    </div>
                </div>
            </FadeSlideInSection>
            
            
          
        </div>
    );
}
