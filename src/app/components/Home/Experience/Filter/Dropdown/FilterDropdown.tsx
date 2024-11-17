"use client"
import "./FilterDropdown.css"

import { useEffect, useState } from "react"
import { options } from "../../Experience";

import allTags from "@/data/portfolio/allTags"

interface Props {
    showing: options[],
    setShowing: any,
    maxItems: number, 
    setMaxItems: any,
}

export default function FilterDropdown( {showing, setShowing, maxItems, setMaxItems} : Props ) {

    const [open, setOpen] = useState(false);
    const [customTags, setCustomTags] = useState<string[]>([])

    useEffect(() => {
        
        showing.forEach((tag) => {
            if (!allTags.includes(tag) && !customTags.includes(tag)) setCustomTags([...customTags, tag])
        })

    }, [showing])

    function handleButtonClick() { setOpen(open ? false : true) }
    function decideAddOrRemove(tag: string) { 
        if (showing.includes(tag)) {

            let newShowing = showing.filter(s => s !== tag);
            setShowing(newShowing)

        } else {
            setShowing([...showing, tag]) 
        }
    }

    function handleRemoveCustomTag(tag: string) {
        let newShowing = customTags.filter(s => s !== tag);
        setCustomTags(newShowing)
    }
    function handleChangeMaxItems(e: any) {
        if (e.target.value < 1) setMaxItems(1)
        else setMaxItems(e.target.value)
    }

    return ( <div className='filter-dropdown-wrapper'>

        <button className='ml-5' onClick={handleButtonClick}> <img src="/images/icons/filter.svg" width={20} height={20}/> </button>
        {open && <div className='overlay' onClick={handleButtonClick}> </div>}
        {open && <div className="filter-dropdown widget"> 
            
            <p className="title">Show work</p>

            <div className="tags">
                {allTags.map((tag, index) => {

                    return <button disabled={tag === "education"} key={index} className={`${showing.includes(tag) ? "selected" : ""}`} onClick={() => decideAddOrRemove(tag)}> {tag} </button>

                })}
            </div>
            
            {customTags.length > 0 && <>
                <p className="title pt-4">Custom tags</p>
                <div className="tags">
                    {customTags.map((tag, index) => {

                        return <button disabled={tag === "education"} key={index} className={`${showing.includes(tag) ? "selected" : ""}`} onClick={() => handleRemoveCustomTag(tag)}> {tag} </button>

                    })}
                </div>
            </>}

            <p className="title pt-4">Max items</p>
            
            <div className='text-[14px] flex items-center'>
                Showing
                <input className='max-items text-center mx-1' min={2} minLength={1} max={20} maxLength={2} type="number" value={maxItems} onChange={handleChangeMaxItems} />
                items
            </div>

        </div>}

    </div> )
}