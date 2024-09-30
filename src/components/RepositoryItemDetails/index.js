import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Contributors from '../Contributors'
import PageNotFound from '../PageNotFound'
import './index.css'

class RepositoryItemDetails extends Component {
  state = {repoData: {}, isLoading: true, status: false}

  componentDidMount() {
    this.getRepoItemData()
  }

  getRepoItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {reponame} = params
    const user = sessionStorage.getItem('username')
    const options = {method: 'GET'}

    const response = await fetch(
      `https://apis2.ccbp.in/gpv/specific-repo/${user}/${reponame}?api_key=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`,
      options,
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updatedData = {
        name: data.name,
        description: data.description,
        languages: data.lanuages,
        forksCount: data.forks_count,
        stargazersCount: data.stargazers_count,
        watchersCount: data.watchers_count,
        issuesCount: data.open_issues_count,
        contributors: data.contributors,
      }
      this.setState({repoData: updatedData, isLoading: false})
    } else {
      this.setState({isLoading: false, status: true})
    }
  }

  renderRepoItemDetails = () => {
    const {repoData, status} = this.state
    const {contributors} = repoData
    if (Object.keys(repoData).length === 0 && status) {
      return <PageNotFound />
    }
    return (
      <div className="repoItemcontainer">
        <h1 className="repoItemHeading">{repoData.name}</h1>
        {repoData.description !== null ? (
          <p className="repoItemdescription">{repoData.description}</p>
        ) : (
          <p className="repoItemdescription">
            To create a nested list using the web editor on GitHub or a text
            editor that uses a monospaced font, like Atom, you can align your
            list visually.
          </p>
        )}
        <div className="repoItemLangcontainer">
          {repoData.languages.map(eachLang => (
            <p className="repoLanglayout" key={eachLang.name}>
              {eachLang.name}
            </p>
          ))}
        </div>
        <div className="RepoItemstatsContainer">
          <img
            src="https://res.cloudinary.com/drw030kab/image/upload/v1713976612/lz9n1vhgf6qlmaolzwx4.png"
            alt=""
          />
          <p>{repoData.forksCount}</p>
          <img
            src="https://res.cloudinary.com/drw030kab/image/upload/v1713976607/go881r4ex0dt84efo81c.png"
            alt=""
          />
          <p>{repoData.stargazersCount}</p>
        </div>
        <div style={{display: 'flex', backgroundColor: 'transparent'}}>
          <div className="repoItemWatcherCount">
            <p style={{margin: '0px'}}> Commits Counts </p>
            <p style={{margin: '0px'}}>{repoData.watchersCount}</p>
          </div>
          <div className="repoItemWatcherCount">
            <p style={{margin: '0px'}}> Issues Counts </p>
            <p style={{margin: '0px'}}>{repoData.issuesCount}</p>
          </div>
        </div>
        <div style={{backgroundColor: 'transparent'}}>
          <h1 className="repoItemContributors">Contributors:</h1>
          <p className="contributorsCount">{contributors.length} Members</p>
          <Contributors contributors={contributors} />
        </div>
        <div style={{backgroundColor: 'transparent'}}>
          <h1 className="repoItemContributors">Languages:</h1>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-position">
            <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
          </div>
        ) : (
          this.renderRepoItemDetails()
        )}
      </div>
    )
  }
}

export default RepositoryItemDetails
