import './index.css'

const Contributors = props => {
  const {contributors} = props
  console.log(contributors)
  return (
    <div className="ContributorsList">
      {contributors.map((contributor, index) => {
        if (index <= 4) {
          return (
            <img
              className="ContributorsAvatar"
              key={contributor.id}
              src={contributor.avatar_url}
              alt={contributor.login}
            />
          )
        }
        return ''
      })}
      {contributors.length > 5 && (
        <div className="ContributorsCountPresent">
          {`+${contributors.length - 5}`}
        </div>
      )}
    </div>
  )
}

export default Contributors
