import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import NoRepoFound from '../NoRepoFound'
import NoRepoDataFound from '../NoRepoDataFound'

import './Repoindex.css'

class Repository extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchedArray: [],
      isLoading: true,
      statusState: '',
    }
  }

  componentDidMount() {
    const username = sessionStorage.getItem('username')
    const getUserRepoData = async () => {
      const options = {method: 'GET'}
      const response = await fetch(
        `https://apis2.ccbp.in/gpv/repos/${username}?api_key=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`,
        options,
      )
      this.setState({statusState: response.ok})
      if (response.ok) {
        const data = await response.json()
        const fetchedArray = data.map(eachRepo => ({
          id: eachRepo.id,
          reponame: eachRepo.name,
          description: eachRepo.description,
          languages: eachRepo.languages,
          forksCount: eachRepo.forks_count,
          stargazersCount: eachRepo.stargazers_count,
        }))
        this.setState({fetchedArray, isLoading: false})
      } else {
        this.setState({isLoading: false})
      }
    }
    getUserRepoData()
  }

  render() {
    const {fetchedArray, statusState, isLoading} = this.state
    if (isLoading) {
      return (
        <div className="loader-position" data-testid="loader">
          <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
        </div>
      )
    }
    if (!statusState) {
      return <NoRepoDataFound />
    }
    if (fetchedArray.length === 0) {
      return <NoRepoFound />
    }

    return (
      <div className="reposContainer">
        <h1 className="main-heading">Repositories</h1>
        <ul>
          {fetchedArray.map(eachRepo => (
            <li key={eachRepo.id}>
              <Link
                className="repoLink"
                to={`/repositories/${eachRepo.reponame}`}
              >
                <div className="repoContainer">
                  <h1 className="repoHeading">{eachRepo.reponame}</h1>
                  {eachRepo.description !== null ? (
                    <p className="repoDescription">{eachRepo.description}</p>
                  ) : (
                    <p className="repoDescription">
                      To create a nested list using the web editor on GitHub or
                      a text editor that uses a monospaced font, like Atom, you
                      can align your list visually.
                    </p>
                  )}
                  <div className="langContainer">
                    {eachRepo.languages.map(eachLang => (
                      <p className="lang-layout" key={eachLang.name}>
                        {eachLang.name}
                      </p>
                    ))}
                  </div>
                  <div className="RepostatsContainer">
                    <img
                      src="https://res.cloudinary.com/drw030kab/image/upload/v1713976612/lz9n1vhgf6qlmaolzwx4.png"
                      alt=""
                    />
                    <p>{eachRepo.forksCount}</p>
                    <img
                      src="https://res.cloudinary.com/drw030kab/image/upload/v1713976607/go881r4ex0dt84efo81c.png"
                      alt=""
                    />
                    <p>{eachRepo.stargazersCount}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Repository
