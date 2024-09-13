import React from 'react';
import FadeSlideInSection from '../components/FadeSlideInSection';
import { Logo } from '../components/Logos.jsx';
import ContentCard from '../components/ContentCard.jsx';


export default function ServicesPage() {
  return (
    <FadeSlideInSection className="flex flex-col justify-center items-center">
        <ContentCard
            renderSize="sm"
            renderArgs={{
              text: `Our orchids come from top growers in Taiwan, known for their exceptional cultivation. Carefully selected from the country’s 
              lush landscapes, our orchids are vibrant and beautiful, making them a stunning addition to any setting and occasion.`,
              src: "",
              orientation: "IT",
              textSize: "text-2xl",
            }}
            direction="row"
          />
    </FadeSlideInSection>
  
  );
}