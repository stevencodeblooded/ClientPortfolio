import './Attributes.css'

const Attributes = () => {
  return (
    <div className='container'>
      <div className='attributes' id='Signature'>
        <h2 data-aos='fade-down' data-aos-duration='3000'>Why Me?</h2>
        <div className='flex-features'>
          <ul className='unique-features'>
            <li data-aos="fade-right" data-aos-duration="300">Client-Centered Collaboration</li>
            <li data-aos='fade-right' data-aos-duration='400'>Storyteller Through Imagery</li>
            <li data-aos='fade-right' data-aos-duration='500'>Diverse Genre Expertise</li>
            <li data-aos='fade-right' data-aos-duration='600'>Natural Light Master</li>
            <li data-aos='fade-right' data-aos-duration='700'>Adept at Drone Photography</li>
          </ul>

          <ul className='unique-features'>
            <li data-aos="fade-left" data-aos-duration="800">Unique Composition</li>
            <li data-aos="fade-left" data-aos-duration="900">Timeless Black & WhiteTimeless Black & White</li>
            <li data-aos="fade-left" data-aos-duration="1000">World Traveler Perspective</li>
            <li data-aos="fade-left" data-aos-duration="1100">Emotion-Evoking Portraits</li>
            <li data-aos="fade-left" data-aos-duration="1200">Meticulous Eye for Detail</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Attributes