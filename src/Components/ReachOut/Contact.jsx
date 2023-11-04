import './Contact.css'
import contactImage from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div className='container'>
      <div className='something' id='Contact'>
       <div className='contact' data-aos="fade-up" data-aos-duration='2000' data-aos-anchor-placement="top-bottom">
          <div className='connect-container'>
            <h2 className='connect-heading'>Reach Out <br />and Connect</h2>
            <h3>Let's Start a Conversation</h3>
            <a href="mailto:clintono146@gmail.com" className='contact-link'>Send a Message</a>
          </div>
          <div>
            <img src={contactImage} alt="Contact" className='contact-image' />
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Contact