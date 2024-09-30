import {RiBuildingLine} from 'react-icons/ri'
import {IoMdLink} from 'react-icons/io'
import {IoLocationOutline} from 'react-icons/io5'
import './index.css'

const Profile = props => {
  const {userDetails} = props
  return (
    <div className="profileContainer">
      <img className="profileImg" src={userDetails.avatarUrl} alt="user" />
      <h1 className="profileName">{userDetails.name}</h1>
      <p className="loginName">{userDetails.login}</p>
      <p className="profileBio">{userDetails.bio}</p>
      <div className="ProfilestatsContainer">
        <div className="followerContainer border">
          <p className="statusCount">{userDetails.followers}</p>
          <p className="statusText">FOLLOWERS</p>
        </div>
        <div className="followerContainer border">
          <p className="statusCount">{userDetails.following}</p>
          <p className="statusText">FOLLOWING</p>
        </div>
        <div className="followerContainer">
          <p className="statusCount">{userDetails.publicRepos}</p>
          <p className="statusText">PUBLIC REPOS</p>
        </div>
      </div>
      <div className="contactContainer">
        <div className="followerContainer">
          <p className="statusCount">Company</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <RiBuildingLine />
            <p className="statusText">{userDetails.company}</p>
          </div>
        </div>
        <div className="followerContainer">
          <p className="statusCount">CompanyUrl</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IoMdLink />
            <p className="statusText">{userDetails.companyUrl}</p>
          </div>
        </div>
        <div className="followerContainer">
          <p className="statusCount">Location</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IoLocationOutline />
            <p className="statusText">{userDetails.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
