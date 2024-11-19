import './components/Home/home.css';

import Hero from './components/Home/Hero/Hero';
import About from './components/Home/About/About';
import Skills from './components/Home/Skills/Skills';
import Experience from './components/Home/Experience/Experience';
import Contact from './components/Home/Contact/Contact';
import Footer from './components/Home/Footer/Footer';
import SideNav from './components/Home/SideNav/SideNav';

export default async function HomePage() {
  return (
    <>
      <Hero />

      <div className="container relative">
        <span className="flex justify-between">
          <About />
          <SideNav />
        </span>
        <Skills />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </>
  );
}