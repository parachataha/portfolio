import './About.css';

export default function About() {

  return (
    <main id='about' className='section-padding-y'>

      <div className="main-content">

        <h2 className='copy-url'>
          I develop and design <span className='highlight-primary'>websites</span> and infrastructure 
        </h2>
        
        <p className="grey">
          Hey, im <span className='highlight'>Taha Paracha</span>, I'm a student striving to help new developers and young <span className='highlight'>entrepreneurs</span> create their dreams. I use the latest technology to create a beautiful UI and ensure an amazing <span className='highlight'>user experience</span>.  
        </p>

        {/* <div className="blog-link small">
          <h3 className="blog-title">Learn how I code infrastructure and websites</h3>
        </div> */}

      </div>

    </main>
  )
}