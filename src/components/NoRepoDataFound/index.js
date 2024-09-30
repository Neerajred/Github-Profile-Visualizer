import './index.css'
import {Link} from 'react-router-dom'

const NoRepoDataFound = () => (
  <div className="main-container">
    <div className="container">
      <img
        src="https://res.cloudinary.com/drw030kab/image/upload/v1713158405/bvltdcpfomonumrb6arc.png"
        height="438px"
        width="401px"
        alt="empty repositories"
      />
      <h1>No Data Found</h1>
      <p>
        GitHub Username is empty, please provide a valid username for
        Repositories
      </p>
      <Link to="/">
        <button type="button" className="home-button">
          Go To Home
        </button>
      </Link>
    </div>
  </div>
)

export default NoRepoDataFound
