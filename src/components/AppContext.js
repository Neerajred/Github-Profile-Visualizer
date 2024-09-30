// AppContext.js
import {createContext, useState, useEffect} from 'react'

// Create the Context
export const AppContext = createContext()

// Create a Provider component
export const AppProvider = ({children}) => {
  // Initialize state with values from localStorage, if they exist
  const [username, setUsername] = useState(
    localStorage.getItem('username') || '',
  )
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeTab') || 'home',
  )

  // Effect to update localStorage when username changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username)
    } else {
      localStorage.removeItem('username')
    }
  }, [username])

  // Effect to update localStorage when activeTab changes
  useEffect(() => {
    if (activeTab) {
      localStorage.setItem('activeTab', activeTab)
    } else {
      localStorage.removeItem('activeTab')
    }
  }, [activeTab])

  // Function to clear context values and localStorage
  const clearContext = () => {
    setUsername('')
    setActiveTab('home')
    localStorage.removeItem('username')
    localStorage.removeItem('activeTab')
  }

  return (
    <AppContext.Provider
      value={{username, setUsername, activeTab, setActiveTab, clearContext}}
    >
      {children}
    </AppContext.Provider>
  )
}
