import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'

const Nav = () => {

  const [ showItems, setShowItems ] = useState(false)

  const toggleHandle = () => {
    setShowItems(!showItems)
  }
  
  return (
    <nav className='nav-container'>
      <h3>
        <a href="#Home">Clinton</a>
      </h3>

      <ul className={showItems ? 'mobile-nav-items' : 'nav-items'}>
        <li>
          <a href="#Home">Home</a>
        </li>

        <li>
          <a href="#About">About Me</a>
        </li>

        <li>
          <a href="#Signature">Signature </a>
        </li>

        <li>
          <a href="#Photos">Photos</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
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