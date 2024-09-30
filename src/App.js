import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Repository from './components/Repository'
import Analysis from './components/Analysis'
import RepositoryItemDetails from './components/RepositoryItemDetails'
import PageNotFound from './components/PageNotFound'
import {AppProvider} from './components/AppContext'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './App.css'

const App = () => (
  <AppProvider>
    <>
      <Header />
      <div className="sub-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/repositories" component={Repository} />
          <Route
            exact
            path="/repositories/:reponame"
            component={RepositoryItemDetails}
          />
          <Route exact path="/analysis" component={Analysis} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </>
  </AppProvider>
)

export default App
