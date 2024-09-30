import './index.css'

const FailureView = props => {
  const {handleSubmit} = props
  return (
    <div>
      <h1>GitHub Profile Visualizer</h1>
      <img
        className="errorImage"
        src="https://res.cloudinary.com/drw030kab/image/upload/v1710817875/shng5hbixq74ejzqv2dq.png"
        alt="failure view"
      />
      <div className="error-container">
        <p className="error-message">Something went wrong. Please try again</p>
        <button type="button" className="tryAgainBtn" onClick={handleSubmit}>
          Try again
        </button>
      </div>
    </div>
  )
}

export default FailureView
