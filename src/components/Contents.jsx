import React from 'react';
import FadeSlideInSection from './FadeSlideInSection';

export default function ContentCard({ renderSize, renderArgs, direction}) {
    const divSize = "w-[70vw] h-[50vh]";
    const flex = "flex items-center justify-center";
    const flexDir = direction === 'col' ? "flex-col" : "flex-row";

    let renderFunction;
    switch (renderSize) {
        case 'sm':
            renderFunction = renderSmallCard;
            break;
        case 'md':
            renderFunction = renderMediumCard;
            break;
        default:
            break;
    }

    return (
        <FadeSlideInSection>
            <div className={`${divSize} ${flex} ${flexDir} m-10`}>
                {renderFunction(renderArgs)}
            </div>
        </FadeSlideInSection>
        
    );
}

export function renderMediumCard(renderArgs) {
    const ra = renderArgs;
    const imageClass = "object-contain w-[60%] h-[100%] rounded-3xl shadow-slate-600 shadow-2xl";
    const textClass = "text-6xl flex-grow text-[#ccac90] ";

    switch (ra.orientation) {
        case 'III':
            return (
                <>
                    <img src={ra.src1} alt="some orchids" className={imageClass} />
                    <img src={ra.src2} alt="some orchids" className={imageClass} />
                    <img src={ra.src3} alt="some orchids" className={imageClass} />
                </>
            );
        case 'TTT':
            return (
                <>
                    <h2 className={textClass}>{ra.text1}</h2>
                    <h2 className={textClass}>{ra.text2}</h2>
                    <h2 className={textClass}>{ra.text3}</h2>
                </>
            );
        default:
            return null;
    }
}

export function renderSmallCard(renderArgs) {
    const ra = renderArgs;
    const imageClass = "object-contain h-[100%] rounded-3xl m-10 shadow-slate-600 shadow-2xl";
    const textClass = `${ra.textSize} text-center leading-loose text-[#ccac90] `;

    switch (ra.orientation) {
        case 'TI':
            return (
                <>
                    <p className={textClass}>{ra.text}</p>
                    <img src={ra.src} alt="some orchids" className={imageClass} />
                </>
            );
        case 'IT':
            return (
                <>  
                    <img src={ra.src} alt="some orchids" className={imageClass} />
                    <p className={textClass}>{ra.text}</p>
                </>
            );
        default:
            return null;
    }
}
