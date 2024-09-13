import React from 'react';
import { logo1, logo2 } from '../images';

// Component for the main logo with text
export function Logo() {
    return (
        <img src={logo1} alt="company logo" className="object-contain h-full w-[20%]" />
    );
}

// Component for logo without text with dynamic width and height
export function LogoNoText({ w, h }) {
    return (
        <img src={logo2} alt="company logo" className={`object-contain h-[${h}] w-[${w}]`} />
    );
}
