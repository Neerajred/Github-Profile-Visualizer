import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import LinearChart from '../LinearCharts'
import PieChart from '../PieChart'
import NoAnalysisDataFound from '../NoAnalysisDataFound'
import NoAnalysisFound from '../NoAnalysisFound'

const Analysis = () => {
  // Define state using useState hook
  const [quarterCommitCount, setQuarterCommitCount] = useState({})
  const [langRepoCount, setLangRepoCount] = useState({})
  const [statusState, setStatusState] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // useEffect to handle componentDidMount logic
  useEffect(() => {
    const user = sessionStorage.getItem('username')

    const getAnalysisData = async () => {
      const options = {method: 'GET'}
      try {
        const response = await fetch(
          `https://apis2.ccbp.in/gpv/profile-summary/${user}?api_key=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`,
          options,
        )
        if (response.ok) {
          const data = await response.json()
          setQuarterCommitCount(data.quarterCommitCount || {})
          setLangRepoCount(data.langRepoCount || {})
          setStatusState(true) // Update status to true if data fetched successfully
        } else {
          setStatusState(false) // Set status to false if fetch failed
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setStatusState(false)
      } finally {
        setIsLoading(false) // Set loading to false in both cases
      }
    }

    getAnalysisData()
  }, [])

  // Loading state
  if (isLoading) {
    return (
      <div className="loader-position" data-testid="loader">
        <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
      </div>
    )
  }

  // If no data is found
  if (statusState === false) {
    return <NoAnalysisDataFound />
  }

  // If language repository count is empty
  if (Object.keys(langRepoCount).length === 0) {
    return <NoAnalysisFound />
  }

  // Render charts with the data
  return (
    <>
      <LinearChart commitData={quarterCommitCount} />
      <PieChart langRepo={langRepoCount} />
    </>
  )
}

export default Analysis
