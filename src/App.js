import './App.css'

import { Switch, Route } from 'react-router-dom'
import HomeView from './views/Homeview'
import LibraryView from './views/LibraryView'
import BookDetailsView from './views/BookDetailsView'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'


function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  )
}

export default App
