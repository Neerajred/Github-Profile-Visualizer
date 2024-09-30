import './index.css'
import {Link} from 'react-router-dom'

const NoAnalysisDataFound = () => (
  <div className="main-container">
    <div className="container">
      <img
        src="https://res.cloudinary.com/drw030kab/image/upload/v1713158405/bvltdcpfomonumrb6arc.png"
        height="438px"
        width="401px"
        alt="empty analysis"
      />
      <h1>No Data Found</h1>
      <p>
        GitHub Username is empty, please provide a valid username for Analysis
      </p>
      <Link to="/">
        <button type="button" className="home-button">
          Go To Home
        </button>
      </Link>
    </div>
  </div>
)

export default NoAnalysisDataFound
