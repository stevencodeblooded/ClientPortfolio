import './Photos.css'
import photo1 from '../assets/my_works_1.jpg'
import photo2 from '../assets/my_works_2.jpg'
import photo3 from '../assets/my_works_3.jpg'
import photo4 from '../assets/my_works_7.jpg'

const Photos = () => {
  return (
    <div className='container'>
      <div className='centered' id='Photos'>
        <div className='photos-container'>
          <h2 data-aos='fade-down' data-aos-duration='3000'>Captured Moments...</h2>
          <div className='photos'>
            <img src={photo1} alt="captured" className='captured-photo-1' data-aos='zoom-in-up' data-aos-duration='2000'/>
            <div className='photos-on-right'>
              <div className='upper'>
                <img src={photo2} alt="captured" className='captured-photo-2' data-aos='zoom-in-up' data-aos-duration='4000' />
                <img src={photo3} alt="captured" className='captured-photo-3' data-aos='zoom-in-up' data-aos-duration='6000'/>
              </div>
              <img src={photo4} alt="captured" className='captured-photo-4' data-aos='zoom-in-up' data-aos-duration='8000'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos