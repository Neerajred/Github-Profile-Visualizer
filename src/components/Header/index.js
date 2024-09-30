import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {AppContext} from '../AppContext' // Import AppContext

const Navbar = () => {
  const {activeTab, setActiveTab} = useContext(AppContext) // Destructure activeTab and setActiveTab from context
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="header-container">
      <div className="logo-and-title-container">
        <Link className="route-link" to="/">
          <h1 className="title">Github Profile Visualizer</h1>
        </Link>
        <div>
          <button className="hamburger-icon" type="button" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>
      <ul className={`nav-items-list ${menuOpen ? 'open' : ''}`}>
        <li className="link-item">
          <Link
            className={`${activeTab === 'home' ? 'active-link' : 'route-link'}`}
            to="/"
            onClick={() => {
              setActiveTab('home') // Update activeTab in context
              setMenuOpen(false) // Close menu on link click
            }}
          >
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link
            className={`${
              activeTab === 'repos' ? 'active-link' : 'route-link'
            }`}
            to="/repositories"
            onClick={() => {
              setActiveTab('repos') // Update activeTab in context
              setMenuOpen(false)
            }}
          >
            Repositories
          </Link>
        </li>
        <li className="link-item">
          <Link
            className={`${
              activeTab === 'analysis' ? 'active-link' : 'route-link'
            }`}
            to="/analysis"
            onClick={() => {
              setActiveTab('analysis') // Update activeTab in context
              setMenuOpen(false)
            }}
          >
            Analysis
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
