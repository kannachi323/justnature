import React from 'react';
import Logo from '../components/Logo';
import { NavBar } from '../components/NavBar';
import ContentCard from '../components/ContentCard';
import {
  bg1,
  IMG_4777,
  IMG_5493,
  IMG_6856,
  IMG_6906,
} from '../images';
import FadeSlideInSection from '../components/FadeSlideInSection';

export default function HomePage() {
  return (
    <>

      <div className="h-[175vh] w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto">
        <FadeSlideInSection className="self-start text-6xl relative left-[10vw] text-opacity-100 text-white">
          <b>Elegant.</b>
        </FadeSlideInSection>
          <div className="flex flex-row items-center justify-evenly">
            <img src={IMG_4777} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
            <img src={IMG_6856} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
            <img src={IMG_6906} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          
        </div>
        <FadeSlideInSection className="self-end text-6xl relative right-[10vw] m-10 text-opacity-100 text-white">
          <b>Beautiful.</b>
        </FadeSlideInSection>

        <FadeSlideInSection className="self-center text-6xl m-5">
          <img src={bg1} alt="some orchids" className="object-cover h-[85vh] w-[90vw] rounded-3xl shadow-slate-600 shadow-2xl" />
        </FadeSlideInSection>
      </div>


      <div className="h-[175h] w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-[#131d38]">
   

        <FadeSlideInSection className="self-start text-6xl relative left-[10vw] m-10 text-opacity-100 text-white">
          <b>Vibrant.</b>
        </FadeSlideInSection>
        <ContentCard
          renderSize="sm"
          renderArgs={{
            text: `Our orchids come from top growers in Taiwan, known for their exceptional cultivation. Carefully selected from the country’s 
            lush landscapes, our orchids are vibrant and beautiful, making them a stunning addition to any setting and occasion.`,
            src: bg1,
            orientation: "IT",
            textSize: "text-2xl",
          }}
          direction="row"
        />

      
        <FadeSlideInSection className="self-end text-6xl relative right-[10vw] m-10 text-opacity-100 text-white">
         <b>Premium.</b>
        </FadeSlideInSection>
        <ContentCard
          renderSize="sm"
          renderArgs={{
            text: `For over 15 years, we’ve delivered exquisite orchids that transform various spaces and create memorable atmospheres. 
                  Our reputation for quality comes from crafting custom arrangements that perfectly match each client’s vision.`,
            src: bg1,
            orientation: "TI",
            textSize: "text-2xl"
          }}
          direction="row"
        />
      </div>

      <div className="h-[175vh] w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-slate-900">
        <FadeSlideInSection className="self-center text-6xl m-10 text-opacity-100 text-white">
         <b>It's not just nature...</b>
        </FadeSlideInSection>
        <ContentCard
          renderSize="sm"
          renderArgs={{
            text: `Our orchids come from top growers in Taiwan, known for their exceptional cultivation. Carefully selected from the country’s 
            lush landscapes, our orchids are vibrant and beautiful, making them a stunning addition to any setting and occasion.`,
            src: bg1,
            orientation: "IT",
            textSize: "text-2xl",
          }}
          direction="row"
        />

      
        
        <FadeSlideInSection className="text-6xl m-10 text-opacity-100 text-white">
          <b>it's <i className="text-[#9fdb4b]">Just Nature</i></b>
        </FadeSlideInSection>
        <ContentCard
          renderSize="sm"
          renderArgs={{
            text: `For over 15 years, we’ve delivered exquisite orchids that transform various spaces and create memorable atmospheres. 
                  Our reputation for quality comes from crafting custom arrangements that perfectly match each client’s vision.`,
            src: bg1,
            orientation: "TI",
            textSize: "text-2xl"
          }}
          direction="row"
        />

      </div>
      
      

      
    </>
  );
}
