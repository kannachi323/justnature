import React from 'react';
import FadeSlideInSection from 'components/FadeSlideInSection';
import { IMG_4777, IMG_6856, IMG_6906 } from 'images';

export default function GalleryPage() {
  const images = [
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, IMG_6906,
    IMG_4777, IMG_6856, 
  ]; // todo: implement fetching images dynamically

  return (
    
    <div className="flex flex-wrap items-center justify-evenly">
      {images.map((image, index) => (
        <FadeSlideInSection key={index}>
          <img 
            src={image} 
            alt={`orchid-${index}`} 
            className="object-cover h-[50vh] w-[25vw] rounded-3xl shadow-slate-600 shadow-2xl m-5" 
          />
        </FadeSlideInSection>
      ))}
      </div>
   
  );
}
