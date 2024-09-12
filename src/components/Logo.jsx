import React, {useState} from 'react';
import { logo } from '../images';

export default function Logo() {
    return (
        <img src={logo} alt="company logo" className="object-contain h-[25vh] w-[30vw]" />
    )
}