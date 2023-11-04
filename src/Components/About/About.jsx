import './About.css'
import myselftakingPics from '../assets/my_works_4.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className='about-me' id='About'>
        <img src={myselftakingPics} alt="Holding Camera" className='holding-camera' data-aos='zoom-in' data-aos-duration='1500'/>
        <div className='about-description'>
          <h2 data-aos='fade-down' data-aos-duration='3000'>About Myself</h2>
          <div data-aos='zoom-in-up' data-aos-duration='2000'>
            <p>Clinton is a passionate photographer with an unquenchable thirst for capturing life's most beautiful moments through his lens.</p>
            <p>His lens is his paintbrush, and the world is his canvas. With an unrelenting passion for photography, he transforms moments into timeless works of art</p>
            <p>Through his lens, Clinton weaves stories that resonate deeply. He's not just a photographer; he's a visual storyteller, crafting narratives in every click.</p>
            <div>
              <a href="#Contact" className='contact-link'>Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About