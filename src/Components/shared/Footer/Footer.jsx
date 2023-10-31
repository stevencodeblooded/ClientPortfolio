import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <p><FontAwesomeIcon icon={faCopyright} className='copyright-icon' /> Clinton - photographer @{year}</p>
    </div>
  )
}

export default Footer