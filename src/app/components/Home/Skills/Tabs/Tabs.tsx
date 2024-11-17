import './Tabs.css'
import Link from 'next/link'
import TabPage from './TabPage/TabPage';
import { useRef } from 'react';

type selectedType = "" | "assets-ui-design" | "website-development" | "server-infrastructure" | "databases" 

interface Props {
    selected: selectedType, 
    setSelected: (arg: "" | "assets-ui-design" | "website-development" | "server-infrastructure" | "databases") => void;
}

export default function Tabs( {selected, setSelected} : Props ) {

    return (
        <div>
            <div className="skills-tabs-wrapper">
                <ul className="skills-tabs">
                    <li className={selected == "" ? "active" : ""}> 
                        <button onClick={() => setSelected("")}>Website Design</button> 
                        <div className='bottom-gap'></div>
                        <div className="bottom-border"></div>
                    </li>
                    <li className={selected == "assets-ui-design" ? "active" : ""}> 
                        <button onClick={() => setSelected("assets-ui-design")}>Assets/UI Design</button> 
                        <div className='bottom-gap'></div>
                        <div className="bottom-border"></div>
                    </li>
                    <li className={selected == "website-development" ? "active" : ""}> 
                        <button onClick={() => setSelected("website-development")}>Website Development</button> 
                        <div className='bottom-gap'></div>
                        <div className="bottom-border"></div>
                    </li>
                    <li className={selected == "server-infrastructure" ? "active" : ""}> 
                        <button onClick={() => setSelected("server-infrastructure")}>Server infrastructure</button> 
                        <div className='bottom-gap'></div>
                        <div className="bottom-border"></div>
                    </li>
                    <li className={selected == "databases" ? "active" : ""}> 
                        <button onClick={() => setSelected("databases")}>Databases</button> 
                        <div className='bottom-gap'></div>
                        <div className="bottom-border"></div>
                    </li>
                </ul>
                <div className="bottom-border"></div>
            </div>

            <main className="skills-page-wrapper">

                <TabPage selected={selected === ""} skill={{
                    name: "website-design",
                    body: <> <span className='highlight'>Website design</span> shapes your customers first impressions. Great design ensures a seamless and <span className='highlight'>engaging experience</span>. Keeping users engaged and converting clicks into customers. I create thoughtful layouts and amazing UIs and designs. Simple, intuitive, and <span className='highlight'>beautiful</span>. </>,
                    tags: ["design", "websites", "figma"],
                    blogPosts: [{title: "How I create stunning websites", link: ""}],
                    moreInfo: "I am a cool boi",
                }}/>

                <TabPage selected={selected === "assets-ui-design"} skill={{
                    name: "asset-ui-design",
                    body: <> <span className='highlight'>Assets and UI design</span> are crucial for capturing attention and making a lasting impact. Thumbnails, adverts, and banners that are <span className='highlight'>visually striking</span> help your brand stand out, while intuitive interfaces keep users <span className='highlight'>engaged</span> and connected seamlessly. </>,
                    tags: ["design", "assets", "ui", "branding"],
                    blogPosts: [{title: "How I create attention-grabbing assets", link: ""}],
                    moreInfo: "I specialise in making designs that not only look good but also deliver results.",
                }}/>

                <TabPage selected={selected === "website-development"} skill={{
                    name: "website-development",
                    body: <> <span className='highlight'>Website development</span> brings designs to life using the best tech stacks like <span className='highlight'>React</span> and <span className='highlight'>Next.js</span>. I am a fullstack developer who builds fast, scalable, and responsive websites that keep users engaged and ensure seamless <span className='highlight'>functionality</span> across devices. </>,
                    tags: ["develop", "websites", "fullstack", "nextjs", "react"],
                    blogPosts: [{title: "Why I use modern tech stacks for web development", link: ""}],
                    moreInfo: "From front-end to back-end, I ensure every piece of the puzzle works together perfectly.",
                }}/>

                <TabPage selected={selected === "server-infrastructure"} skill={{
                    name: "server-infrastructure",
                    body: <> <span className='highlight'>Server infrastructure</span> is the backbone of any robust web application. Using my knowledge of Linux basics, <span className='highlight'>cPanel</span>, and WHM, I set up, manage, and secure servers to ensure maximum uptime and performance, keeping everything running smoothly and <span className='highlight'>efficiently</span>. </>,
                    tags: ["servers", "linux", "cpanel", "whm"],
                    blogPosts: [{title: "How I maintain reliable server infrastructure", link: ""}],
                    moreInfo: "I focus on optimising performance while keeping your data secure and accessible.",
                }}/>

                <TabPage selected={selected === "databases"} skill={{
                    name: "databases",
                    body: <> <span className='highlight'>Database design</span> is critical for speed and security. I'm experienced with Firebase Firestore, <span className='highlight'>MySQL</span>, and <span className='highlight'>PostgreSQL</span>, ensuring that all database infrastructures are optimised to handle data efficiently while keeping it <span className='highlight'>secure</span> and reliable. </>,
                    tags: ["databases", "firestore", "mysql", "postgresql"],
                    blogPosts: [{title: "Designing databases for speed and security", link: ""}],
                    moreInfo: "Every database I create is built to deliver high performance and protect your data.",
                }}/>

            </main>

        </div>

    )
}