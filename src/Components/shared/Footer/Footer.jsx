import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <p>&#169; Clinton - photographer @{year}</p>
    </div>
  )
}

export default Footer