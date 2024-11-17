import "./Hero.css"

import Nav from "../Nav/Nav"

export default function Hero() {

  return (
    <header className={`hero`}>

      <Nav/>

      <div className="container main-content">

        <h1>Hi, I'm Taha.</h1>
        <h3 className='info-1 grey'>I develop and design your businesses online presence</h3>

        <div className="bottom">
          <p className="info-2 grey">I prioritize UI and UX to convert your clicks in customers. </p>
        </div>

      </div>

      <div className="vector-content"> 

        <p className='info-1'>A full-stack developer and designer dedicated to transform your dreams into a reality</p>
        <p className='info-2'>“My business has been brought to life”
        <br/> - A client</p>

      </div>

    </header>
  )
}