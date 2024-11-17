"use client"
import { ExperienceData } from "@/types/data/portfolio/Experience"
import "./ImageCarousel.css"

import { useState } from "react"
import Image from "next/image"

interface Props {
    data: ExperienceData,
}

export const defaultBlurDataURL : string = "data:image/jpeg;base64,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"

export default function ImageCarousel( {data} : Props ) {

    const [slide, setSlide] = useState<number>(0)

    function handlePrevious() {
        if (slide <= 0) { setSlide(data.images.length -1); return; }
        else { setSlide(slide - 1); return; }
    }

    function handleNext() {
        if (slide >= data.images.length - 1) { setSlide(0); return; }
        else { setSlide(slide + 1); return; }
    }

    return(<div className='image-carousel'>

        {data?.customization?.navigateButtons.type === "left-right" && 
            <div key="left-right" className="buttons right-left">
                <button onClick={handlePrevious} id="previous"> {data?.customization?.navigateButtons?.previous} </button>
                <button onClick={handleNext} id="next"> {data?.customization?.navigateButtons?.next} </button>
            </div> 
        }
        {data?.customization?.navigateButtons.type === "top-bottom" && 
            <div key="top-bottom" className="buttons top-bottom">
                <button onClick={handlePrevious} id="previous"> {data?.customization?.navigateButtons?.previous} </button>
                <button onClick={handleNext} id="next"> {data?.customization?.navigateButtons?.next} </button>
            </div> 
        }

        <div className="slide-counter chip">
            <span> {slide + 1}/{data.images.length} {data?.customization?.imageType} </span>
        </div> 

        {data.images.map((img, index) => (
            <div key={img.name}>
                {index === slide ? 
                    (img.format === "img" ?  
                        <Image placeholder="blur" blurDataURL={img.blurDataURL ? img.blurDataURL : defaultBlurDataURL} loading="eager" className='image' alt={img.name} src={`${img.url}`} width={400} height={200}/>
                        :
                        <img loading="eager" className='image' alt={img.name} src={`${img.url}`} width={400} height={200}/>
                    ) 
                    : 
                    (img.format === "img" ?  
                        <Image placeholder="blur" blurDataURL={img.blurDataURL ? img.blurDataURL : defaultBlurDataURL} loading="lazy" className='image hidden' alt={img.name} src={`${img.url}`} width={400} height={200}/>
                        :
                        <img loading="eager" className='image hidden' alt={img.name} src={`${img.url}`} width={400} height={200}/>
                    )
                }
            </div>
        ))}
        
    </div>)
}
