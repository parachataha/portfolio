import './Tag.css'
import Link from "next/link"

interface Props {
    children: React.ReactNode
    link: string | null | false,
    anchor?: string | null,
}

export default function Tag( {children, link, anchor} : Props ) {

    if (link) return ( <Link className='global-tag' href={link}> {children} </Link> )
    if (anchor) return ( <a className='global-tag' href={anchor}> {children} </a> )
    return ( <div className='global-tag'> {children} </div> )
}