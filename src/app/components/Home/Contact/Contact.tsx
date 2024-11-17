import "./Contact.css"

import { FaMessage, FaDiscord, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
    return (<section id="contact" className='section-padding-y'>

        <h2 className='copy-url'>Contact</h2>
        <p className="grey">
            You can connect with my via <span className='highlight'>Discord</span>, <span className='highlight'>LinkedIn</span> or <span className='highlight'>email</span>
        </p>

        <div className="flex flex-col">
            <div className="widget clear flex my-2">
                <a className='title' href="mailto:parachataha2@gmail.com"> <FaMessage/> parachataha2@gmail.com</a>
            </div>

            <div className="widget clear flex flex-col">
                <a href="https://discord.gg/geEbE5XJzZ" className='title'> <FaDiscord/> Discord</a>
                <p className=''> Simply join and let me know your personal requirements by creating a ticket in <a className='discord-channel text-[0.9em]' href="https://discord.gg/geEbE5XJzZ" target="_blank"> #open-ticket </a>  </p>
            </div>

            <div className="widget clear flex my-2">
                <a className='title' href="https://www.linkedin.com/in/tahaparacha/"> <FaLinkedin/> Taha Paracha</a>
            </div>
        </div>


    </section>)
}