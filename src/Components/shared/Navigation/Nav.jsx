import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav-container'>
      <h3>
        <a href="#Home">Clinton</a>
      </h3>
      <ul className='nav-items'>
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
    </nav>
  )
}

export default Nav