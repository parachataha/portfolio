import './TabPage.css'
import Tag from "@/app/components/global/Tag/Tag"

interface Props {
    selected: boolean,
    skill: {
        name: "website-design" | "asset-ui-design" | "website-development" | "server-infrastructure" | "databases",
        body: React.ReactNode,
        tags: string[]
        blogPosts: { title: string, link: string }[],
        moreInfo: React.ReactNode,
    }
}

export default function TabPage( {selected, skill} : Props ) {

    return ( <article className={`skills-tab-page ${selected ? "selected" : "hidden"} `}>
                    
        <div>
            <p className='body grey'>
                {skill.body}
            </p>

            <div className="tags flex py-4 gap-1">
                {skill.tags.map((tag, index) => {
                    return <Tag key={index} link={null}> {tag} </Tag>
                })}
            </div>

        </div>

        <div className='extra'>
            {skill.blogPosts.map((blogPost, index) => {
                return <div key={index} className='blog-link small mb-3'>{blogPost.title}</div>
            })}

            <div className='widget'>{skill.moreInfo}</div>
        </div>

    </article> )
}