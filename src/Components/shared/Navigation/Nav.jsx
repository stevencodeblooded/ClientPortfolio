import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelopeCircleCheck, faHouse, faPerson, faPhotoFilm, faSignature } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'

const Nav = () => {

  const [ showItems, setShowItems ] = useState(false)

  const toggleHandle = () => setShowItems(!showItems)
  const hideMobileNav  = () => {
    if (showItems) {
      setShowItems(!showItems)
    }
  }
  
  return (
    <nav className='nav-container' data-aos='fade-down' data-aos-duration='1500'>
      <h3>
        <a href="#Home">Clinton</a>
      </h3>

      <ul className={showItems ? `mobile-nav-items` : 'nav-items'} >
        <li>
          <a href="#Home" onClick={ hideMobileNav }><FontAwesomeIcon icon={faHouse} className='inline-nav-icon' /> Home</a>
        </li>

        <li>
          <a href="#About" onClick={ hideMobileNav }><FontAwesomeIcon icon={faPerson} className='inline-nav-icon' /> About Me</a>
        </li>

        <li>
          <a href="#Signature" onClick={ hideMobileNav }><FontAwesomeIcon icon={faSignature} className='inline-nav-icon' /> Signature </a>
        </li>

        <li>
          <a href="#Photos" onClick={ hideMobileNav }><FontAwesomeIcon icon={faPhotoFilm} className='inline-nav-icon' /> Photos</a>
        </li>

        <li>
          <a href="#Contact" onClick={ hideMobileNav }><FontAwesomeIcon icon={faEnvelopeCircleCheck} className='inline-nav-icon' /> Contact</a>
        </li>
      </ul>

      <div className='mobile-view'>
        {
          showItems ? (
            <FontAwesomeIcon icon={faClose} onClick={toggleHandle} className='menu-icon'/>
          ) : (
            <FontAwesomeIcon icon={faBars} onClick={toggleHandle} className='menu-icon'/>
          )
        }
      </div>
      
    </nav>
  )
}

export default Nav