"use client"
import "./Timeline.css"

import Item from "./Item/Item"
import { useEffect, useState } from "react"

import { options } from '../Experience'
import { ExperienceData } from "@/types/data/portfolio/Experience"

import data from "@/data/portfolio/experience.json"

interface Props {
    showing: options[],
    setShowing: (value: string[]) => void,
    maxItems: number | string, 
    setMaxItems: (value: number) => void
}

export default function Timeline( {showing, setShowing, maxItems, setMaxItems} : Props ) {

    const [filteredData, setFilteredData] = useState<ExperienceData[]>(data);

    useEffect(() => {

        const filteredExperiences = data.filter(item => 
            item.tags.some(tag => showing.includes(tag.name))
        );          

        setFilteredData(filteredExperiences);

    }, [showing])

    function handleShowMore() {
        if (parseInt(maxItems) >= filteredData.length) return;
        let newMax = parseInt(maxItems) + 2;
        setMaxItems(newMax)
    }

    return (<>

        <div className='experience-timeline'>

            {filteredData.length > 0 ? <>
                {filteredData.map((item, index) => {

                    function isEven() {
                        return index % 2 == 0;
                    }

                    if (index > maxItems - 1) return;
                    
                    if (isEven()) return <div key={index} className='experience-timeline-grid left'>
                        <Item key={index} data={item} className='left' />
                        <div className='extra-block-for-grid'></div>
                    </div>
                    else if (!isEven()) return <div key={index} className='experience-timeline-grid right'>
                        <div className='extra-block-for-grid'></div>
                        <Item key={index} data={item} className='right'/>
                    </div> 

                })}
            </> : <div className='no-tags-selected widget'>
                
                <p className='title'> {showing.length > 0 ? "Nothing found for that... try something else 😬" : "You kinda need to select some tags 🤦‍♂️"} </p>
                <div className="tags flex gap-1">

                    <button className='tag' onClick={() => setShowing(["development"])}> development </button>
                    <button className='tag' onClick={() => setShowing(["design"])}> design </button>
                    <button className='tag' onClick={() => setShowing(["social-media"])}> social media </button>

                </div>
                
            </div>}

        </div>

        {maxItems < filteredData.length && <div className="flex justify-center">
            <button className='chip ml-[11px]' onClick={handleShowMore}>Show more</button>
        </div>}
    
    </>)
}