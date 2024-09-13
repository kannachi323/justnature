import React from 'react';
import Footer from '../components/Footer';
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
      <FadeSlideInSection>
        <div className="h-[175vh] w-screen flex flex-col items-center justify-start text-opacity-60 font-roboto bg-[#f5f5f3]">
      
          <b className="self-start text-6xl relative left-[10vw] text-opacity-100 text-[#ccac91]  mt-7">Elegant.</b>
        
          <div className="flex flex-row items-center justify-evenly">
            <img src={IMG_4777} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
            <img src={IMG_6856} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
            <img src={IMG_6906} alt="some orchids" className="object-cover h-[50vh] w-[25vw] m-10 rounded-3xl shadow-slate-600 shadow-2xl" />
          
          </div>
        
            <b className="self-end text-6xl relative right-[10vw] m-10 text-opacity-100 text-[#ccac91]">Beautiful.</b>


        
            <img src={bg1} alt="some orchids" className="object-cover h-[85vh] w-[90vw] rounded-3xl shadow-slate-600 shadow-2xl" />
        
        </div>
      </FadeSlideInSection>
      
      <FadeSlideInSection>
        <div className="h-[175h] w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-[#e6e6e2]">
   

          <b className="self-start text-6xl relative left-[10vw] m-10 text-opacity-100 text-[#ccac91] ">Vibrant.</b>

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

        

          <b className="self-end text-6xl relative right-[10vw] m-10 text-opacity-100 text-text-[#ccac91]">Premium.</b>

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
        </div>


      </FadeSlideInSection>
      
      <FadeSlideInSection>
        <div className="h-[100vh] w-screen flex flex-col items-center justify-start text-gray-100 text-opacity-60 font-roboto bg-[#f5f5f3]">
          
          <b className="self-center text-6xl m-10 text-opacity-100 text-[#ccac91]">It's not just nature...</b>
        
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

        
          
        
          <b className="text-6xl m-10 text-opacity-100 text-[#ccac91]">it's <i className="text-[#9fdb4b]">Just Nature</i></b>

        </div>

        
        <Footer />

      </FadeSlideInSection>
      
      
      

      
    </>
  );
}
