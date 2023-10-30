import Nav from '../Components/shared/Navigation/Nav'
import Footer from '../Components/shared/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Attributes from '../Components/Attributes/Attributes'
import Photos from '../Components/Photography/Photos'
import Contact from '../Components/ReachOut/Contact'
import './Project.css'

const Project = () => {
  return (
    <div className='full-container'>
      <div className='project'>
        <Nav />
        <Hero />
        <About />
        <Attributes />
        <Photos />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Project