import {useContext, useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {HiOutlineSearch} from 'react-icons/hi'
import Profile from '../Profile'
import FailureView from '../FailureView'
import {AppContext} from '../AppContext' // Import the AppContext
import './index.css'

const Home = () => {
  const {username, setUsername} = useContext(AppContext) // Get username and setUsername from context
  const [userData, setUserData] = useState(null)
  const [status, setStatus] = useState('START')
  const handleFetchUserProfile = async () => {
    setStatus('INPROGRESS')
    const response = await fetch(
      `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=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`,
    )
    if (response.ok) {
      const data = await response.json()
      const userDetails = {
        avatarUrl: data.avatar_url,
        name: data.name,
        login: data.login,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        publicRepos: data.public_repos,
        company: data.company,
        companyUrl: data.blog,
        location: data.location,
      }
      setUserData(userDetails)
      setUsername(username) // Update the context's username
      sessionStorage.setItem('username', username) // Save username to sessionStorage
      setStatus('SUCCESS')
    } else {
      setUserData(null)
      setUsername('') // Clear the context's username
      sessionStorage.removeItem('username') // Remove from sessionStorage
      setStatus('FAILURE')
    }
  }
  useEffect(() => {
    if (username) {
      handleFetchUserProfile(username)
    }
    // eslint-disable-next-line
  }, [username])

  const handleSubmit = e => {
    e.preventDefault()
    handleFetchUserProfile(username)
  }

  return (
    <div className="homeContainer">
      <div>
        <form onSubmit={handleSubmit} className="searchContainer">
          <input
            id="SearchInput"
            type="search"
            value={username} // Controlled input from context
            className="searchInput"
            placeholder="Enter github username"
            onChange={e => setUsername(e.target.value)} // Update context's username value
          />
          <button
            type="button"
            className="searchIcon"
            data-testid="searchButton"
            onClick={handleSubmit}
          >
            .<HiOutlineSearch style={{backgroundColor: '#4f4e4c'}} />
          </button>
        </form>
      </div>
      <p
        className="error-msg"
        id="ErrorMsg"
        style={{display: status === 'FAILURE' ? 'block' : 'none'}}
      >
        Enter the valid github username
      </p>
      {status === 'START' && (
        <div style={{textAlign: 'center'}}>
          <h1>GitHub Profile Visualizer</h1>
          <img
            src="https://res.cloudinary.com/drw030kab/image/upload/v1710399568/mmsigxjvvuiqvqsew0dx.png"
            alt="gitHub profile visualizer home page"
          />
        </div>
      )}
      {status === 'INPROGRESS' && (
        <div className="loader-container" data-testid="loader">
          <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
        </div>
      )}
      {status === 'SUCCESS' && <Profile userDetails={userData} />}
      {status === 'FAILURE' && <FailureView handleSubmit={handleSubmit} />}
    </div>
  )
}

export default Home
