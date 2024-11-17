import "./FilterTabs.css"

import { options } from "../../Experience"

interface Props {
    showing: options[],
    setShowing: any;
}

export default function FilterTabs( {showing, setShowing} : Props ) {

    function decideAddOrRemove(option : options) {

        if (showing && showing.length === 0) { addFilter(option); return; }
        if (showing && showing.length > 0 && showing?.includes(option)) { removeFilter(option); return; };
        addFilter(option)

    }

    // ADD/REMOVE OPTION
    function addFilter(option : options) {
        if (showing && showing.length >= 0 && showing.includes(option)) return; 
        
        let newShowing = [...showing, option]
        setShowing(newShowing)
    }

    function removeFilter(option : options) {
        if (showing && (showing.length === 0 || !showing.includes(option))) return; 
        
        let newShowing = showing.filter(s => s !== option);
        setShowing(newShowing)
    }

    return (
        <div className='filter-tabs'>

            <button onClick={() => decideAddOrRemove("development")} className={`${(showing.length && showing?.includes("development")) ? "showing" : ""}`}> 
                <span> {(showing.length > 0 && showing.includes("development")) ? "-" : "+"} </span>                
                development 
            </button>
            <button onClick={() => decideAddOrRemove("design")} className={`${(showing.length && showing?.includes("design")) ? "showing" : ""}`}> 
                <span> {(showing.length > 0 && showing.includes("design")) ? "-" : "+"} </span>    
                design 
            </button>
            <button onClick={() => decideAddOrRemove("social-media")} className={`tags-extra ${(showing.length && showing?.includes("social-media")) ? "showing" : ""}`}> 
                <span> {(showing.length > 0 && showing.includes("social-media")) ? "-" : "+"} </span>    
                social media 
            </button>
            <button onClick={() => decideAddOrRemove("website")} className={`tags-extra-extra ${(showing.length && showing?.includes("website")) ? "showing" : ""}`}> 
                <span> {(showing.length > 0 && showing.includes("website")) ? "-" : "+"} </span>    
                website
            </button>
            <button onClick={() => decideAddOrRemove("education")} className={`${(showing.length && showing?.includes("education")) ? "showing" : ""}`} disabled> 
                <span> {(showing.length > 0 && showing.includes("education")) ? "-" : "+"} </span>                
                education 
            </button>

        </div>
    )
}