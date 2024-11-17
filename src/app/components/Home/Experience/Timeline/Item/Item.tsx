import Image from "next/image";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import "./Item.css";
import { ExperienceData } from "@/types/data/portfolio/Experience"

interface Props {
    data: ExperienceData,
    className?: string,
}

// `url('/images/home/experience/'${data.glow}')`

export default function Item( {data, className} : Props ) {

    return (<div className={`experience-item ${className}`} >

        {/* <Image className='glow' width={600} height={500} alt='' src={`/images/home/experience/${data.glow}`}/> */}

        <div className="flex justify-between items-baseline">
            <div className="flex items-baseline">
                <h3> {data.name} </h3>
                {data.who && <p className='text-white/30 text-[16px] ml-[7px]'> {data.who} </p>}
            </div>
            {data.label && <p className='text-white/30 text-[16px]'> {data.label} </p>}
        </div>
        
        <div className="images">

            {data.images.length > 1 ? <>

                <ImageCarousel data={data}/>
            
            </> : <>
            
                {data.images[0].format === "img" ? 
                    <Image loading="eager" alt={`${data.name} ${data.tags[0]} work`} width={400} height={200} src={`${data.images[0].url}`}/> 
                    :
                    <img loading="eager" alt={`${data.name} ${data.tags[0]} work`} width={400} height={200} src={`${data.images[0].url}`}/> 
                }
                
            </>}

        </div>

        <div className="tags">
            {data.tags.map((tag) => {
                if (tag.show) return <a href={`/?experience=${tag.url ? tag.url : tag.name}#experience`} key={tag.name}> {tag.name.replaceAll("-", " ")} </a>
            })}
        </div>

    </div>)

}