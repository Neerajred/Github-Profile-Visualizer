import {Link} from 'react-router-dom'
import './index.css'

const PageNotFound = () => (
  <div className="main-container">
    <div className="container">
      <img
        src="https://res.cloudinary.com/drw030kab/image/upload/v1713156611/zatvubgoar8k2mdrbwba.png"
        height="380px"
        width="677px"
        alt="page not found"
      />
      <h1>PAGE NOT FOUND</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button type="button" className="home-button">
          Go To Home
        </button>
      </Link>
    </div>
  </div>
)

export default PageNotFound
