import React from 'react';
import ContentCard from '../components/Contents.jsx';
import { Logo } from '../components/Logos';
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
      <div className="w-screen flex flex-col items-center justify-start text-opacity-60 font-roboto bg-[#f5f5f3]">
        <FadeSlideInSection>
          <Logo args="h-[30vh]" />
        </FadeSlideInSection>
        <FadeSlideInSection className="self-start text-6xl relative left-[10vw] text-opacity-100 text-[#e3bd9e] mt-7">
          <b >Elegant.</b>
        </FadeSlideInSection>
        
        <div className="flex flex-row items-center justify-evenly">
          <FadeSlideInSection>
            <img src={IMG_4777} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
          <FadeSlideInSection>
            <img src={IMG_6856} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
          <FadeSlideInSection>
            <img src={IMG_6906} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
        </div>
        
        <FadeSlideInSection className="self-end text-6xl relative right-[9vw] text-opacity-100 text-[#ccac91]">
          <b>Beautiful.</b>
        </FadeSlideInSection>

        <div className="flex flex-row items-center justify-evenly">
          <FadeSlideInSection>
            <img src={IMG_4777} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
          <FadeSlideInSection>
            <img src={IMG_6856} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
          <FadeSlideInSection>
            <img src={IMG_6906} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          </FadeSlideInSection>
        </div>
        
        
       
      </div>
      
      <div className="w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-[#e6e6e2]">
        <FadeSlideInSection className="self-start text-6xl relative left-[10vw] mt-7 text-opacity-100 text-[#ccac91]">
          <b >Vibrant.</b>
        </FadeSlideInSection>
        
        <FadeSlideInSection>
          <ContentCard
            renderSize="sm"
            renderArgs={{
              text: `We're committed to delivering only the finest quality orchids, ensuring beauty and elegance in every arrangement.`,
              src: bg1,
              orientation: "IT",
              textSize: "text-2xl",
            }}
            direction="row"
          />
        </FadeSlideInSection>
        
        <FadeSlideInSection className="self-end text-6xl relative right-[10vw] text-opacity-100 text-[#ccac91]">
          <b>Premium.</b>
        </FadeSlideInSection>
        
        <FadeSlideInSection>
          <ContentCard
            renderSize="sm"
            renderArgs={{
              text: `Our reputation for quality comes from 20 years of crafting custom orchid arrangements that perfectly match each client’s vision.`,
              src: bg1,
              orientation: "TI",
              textSize: "text-2xl"
            }}
            direction="row"
          />
        </FadeSlideInSection>
      </div>
      
      <div className="w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-[#f5f5f3]">
        <FadeSlideInSection className="self-center text-6xl m-10 text-opacity-100 text-[#ccac91]">
          <b>It's not just nature...</b>
        </FadeSlideInSection>
        
        <FadeSlideInSection>
          <ContentCard
            renderSize="sm"
            renderArgs={{
              text: `Carefully selected from Taiwan's lush landscapes, our orchids are vibrant and beautiful, making them a stunning addition to any setting and occasion.`,
              src: bg1,
              orientation: "IT",
              textSize: "text-2xl",
            }}
            direction="row"
          />
        </FadeSlideInSection>
        
        <FadeSlideInSection className="text-6xl m-10 text-opacity-100 text-[#ccac91]">
          <b>it's <i className="text-[#9fdb4b]">Just Nature</i></b>
        </FadeSlideInSection>

      </div>
    </>
  );
}
