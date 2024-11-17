import Link from "next/link"
import "./Footer.css"

export default function Footer() {

    return <footer className="home-footer mt-[50px]">

        <div className="container">

            <div className="grid">
            
                <div className='info'>
                    <h2>Taha Paracha</h2>
                    <p className='slogan'>Start creating your dream business now.</p>

                    <p className='font-bold mt-2'>About</p>
                    <p className="grey">
                        Im a developer and designer dedicated to helping my clients dreams come true. I create websites that inspire and design backend infrastructure 
                        <br/> <Link href="/#skills" className='underline text-white'>learn more</Link>
                    </p>
                </div>
                <div className='links flex flex-col'>
                    <p className='font-bold mt-2'>Creating</p>
                    <a href="" className="grey hover:underline">Infrastructure</a>
                    <a href="" className="grey hover:underline">Databases</a>
                    <a href="" className="grey hover:underline">APIs</a>
                    <a href="" className="grey hover:underline">Websites</a>
                    <a href="" className="grey hover:underline">Websites design</a>
                    <a href="" className="grey hover:underline">Social media posts</a>
                    <a href="" className="grey hover:underline">Business adverts</a>
                </div>
                
            </div>

        </div>

    </footer>
}