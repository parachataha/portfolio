"use client"
import './Skills.css'

import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

import Tabs from './Tabs/Tabs'

export default function Skills() {

    const searchParams = useSearchParams() 
    const router = useRouter()
    let skillTab  = searchParams.get("skill")

    const [selected, setSelected] = useState<"" | "assets-ui-design" | "website-development" | "server-infrastructure" | "databases">("")
    useEffect(() => {

        if (skillTab && (skillTab === "" || skillTab === "assets-ui-design" || skillTab === "website-development" || skillTab === "server-infrastructure" || skillTab === "databases") ){
            setSelected(skillTab);
        } else if (skillTab && skillTab === "skillTab") {
            setSelected("")
        }

    }, [])

    function copyURL() {
        if (selected === "assets-ui-design" || selected === "website-development" || selected === "server-infrastructure" || selected === "databases") {
            router.push(`/?skill=${selected}#skills`)
        } else if (selected === "") {
            router.push("/?skill=website-design#skills")
        }
        else {
            router.push("/#skills")
        }
    } 


    return ( 
        <section id="skills" className='section-padding-y'>
        
                
            <div className="header-shadow">
                <h2 className='copy-url' onClick={copyURL}>My Skills</h2>
            </div>

            <Tabs selected={selected} setSelected={setSelected}/>


        </section>
    )
}