import './Hero.css'
import profileImage from '../assets/HomeProfile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='container'>
      <div className='flex' id='Home'>
        <div className='brief-data'>
          <p className='intro-text'>HI, I AM <span>CLINTON</span></p>
          <h2>Professional <br /> Photographer based <br />in Nairobi, Kenya</h2>
          <p className='welcome-text'>Welcome to a world of captivating moments captured through the lens of passion.</p>
          <div className='contact-hero'>
            <a href="#Contact" className='contact-link'>Contact Me</a>
            <ul className='socials'>
              <li>
                <a href="mailto:steven.ochieng432@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className='icons' />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/steven-ochieng-aa11b721a/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin}  className='icons'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/stevencodeblooded" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className='icons' />
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight}  className='icons'/>
              </li>
            </ul>
          </div>
        </div>

        <div className='profile-image'>
          <img src={profileImage} alt="Clinton Odhiambo" className='profile' />
        </div>
      </div>
    </div>
  )
}

export default Hero