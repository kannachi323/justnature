import React from 'react';
import { LogoNoText }from '../components/Logos';
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import FadeSlideInSection from "../components/FadeSlideInSection";
import Footer from '../components/Footer';



export default function ContactPage() {
    return (
        <FadeSlideInSection>
            <div className="flex-col flex items-center justify-center">
                <LogoNoText w="30%"/>   
                <div className="flex flex-col items-center justify-start mb-6 w-[60vw] bg-[#1e2436] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <h1 className="text-white text-3xl text-center font-extrabold p-5 pb-0">Hours of Operation</h1>
                    <h2 className="text-center p-0"><i>by appointment only</i></h2>
                    {/* Flex container for days and times */}
                    <div className="flex w-full justify-evenly pt-3">
                        {/* Days */}
                        <ul className="flex flex-col justify-evenly items-start pl-10">
                            <li className="mb-3">Monday</li>
                            <li className="mb-3">Tuesday</li>
                            <li className="mb-3">Wednesday</li>
                            <li className="mb-3">Thursday</li>
                            <li className="mb-3">Friday</li>
                            <li className="mb-3">Saturday</li>
                            <li className="mb-3">Sunday</li>
                            
                        </ul>

                        {/* Times */}
                        <ul className="flex flex-col justify-evenly items-end pr-10">
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
                <div class="mb-6 grid sm:grid-cols-2 hitems-start gap-14 p-8 mx-auto max-w-[60vw] bg-[#1e2436] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    
                    <div>
                        <h1 class="text-white text-3xl font-extrabold text-center">Contact Us </h1>
                        <p class="text-sm text-gray-400 mt-4">
                            Have any questions? Feel free to reach out to us using the contact form. We will get back to you as soon as possible.
                            Thank you!
                        </p>
                        <ul className="flex flex-col text-white mt-5">
                            <li className="flex flex-row items-center justify-start mb-5">
                                <GrLocation className="text-white text-3xl mr-3" />
                                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/i6xyPuQfLktDwMVZ7">107 E Huntingon Dr. Arcadia CA, 91006 </a>
                            </li>
                            <li className="flex flex-row items-center justify-start mb-5">
                                <AiOutlineMail className="text-3xl text-white mr-3" />
                                <p>justnatureusa@gmail.com</p>
                            </li>  
                            <li className="flex flex-row items-center justify-start mb-5">
                                <FiPhone className="text-3xl text-whit mr-3" />
                                <p>(626) 446-6788</p>
                            </li>  
                        </ul>
                    </div>

                    <form class="ml-auto space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                        <input type='email' placeholder='Email'
                            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                        <input type='text' placeholder='Subject'
                            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                        <button type='button'
                            class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                    </form>
                    
                    
                </div>
                
                <div class="bg-[#1e2436] max-w-[60vw] flex items-center justify-center">
                    <iframe title="gform" src="https://docs.google.com/forms/d/e/1FAIpQLSdgc_hEFrRXkOyQR_BBGJxyUPqQUhDXASdue29OvxokZqNarQ/viewform?embedded=true" width="900" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>                
                    
                </div>
            </div>
            <Footer />
        </FadeSlideInSection>
    );
}