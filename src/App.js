import './App.css'
import { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/Homeview'
import LibraryView from './views/LibraryView'
import BookDetailsView from './views/BookDetailsView'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import LoaderSpiner from './components/LoaderSpiner/LoaderSpiner'



function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpiner/>}>
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
      </Suspense>
    </Container>
  )
}

export default App
