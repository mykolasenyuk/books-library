import './App.css'
import Navigation from './Navigation/Navigation'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/Homeview'
import LibraryView from './views/LibraryView'
import BookDetailsView from './views/BookDetailsView'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/library" exact>
          <LibraryView />
        </Route>

        <Route path="/library/:bookId">
          <BookDetailsView />
        </Route>
      </Switch>
    </div>
  )
}

export default App
