import './App.css'
import { NavLink } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import {Container,AppBar,Paper,Button} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import LoaderSpiner from './components/LoaderSpiner/LoaderSpiner'
const HomeView = lazy(() =>
  import('./views/Homeview' /*webpackChunkName: "home-view"*/),
);
const BookDetailsView = lazy(() =>
  import('./views/BookDetailsView' /*webpackChunkName: "book-details-view"*/),
);
const LibraryView = lazy(() =>
  import('./views/LibraryView' /*webpackChunkName: "library-view"*/),
);



const useStyles = makeStyles((theme)=>({
  root:{
    flexHGrow:1
  },
  button:{
    margin: theme.spacing(2)
  },
  container:{
    position: "relative",
    margin: theme.spacing(2),
    marginTop:theme.spacing(5)
  },

  

}))








function App() {
  const classes = useStyles()
  return (
    <Container fixed>
      <AppBar  position='fixed' >
        <Container fixed>
          <Button variant = "contained"  color='inherit'className={classes.button} >
          <NavLink exact to="/">
      Home
    </NavLink>
          </Button>
<Button variant = "contained"  color='inherit' className={classes.button}>
  <NavLink to="/library" >
      Library
    </NavLink>
    </Button>
          </Container >
      </AppBar>
      <Suspense fallback={<LoaderSpiner/>}>
      <Switch>
        <Route path="/" exact>
          <Paper className={classes.container}>
          <HomeView />
          </Paper>
        </Route>
        <Route path="/library" exact>
          <Paper className={classes.container}>
          <LibraryView />
          </Paper>
        </Route>

        <Route path="/library/:bookId">
          <Paper className={classes.container}>
          <BookDetailsView />
          </Paper>
        </Route>
      </Switch>
      </Suspense>
    </Container>
  )
}

export default App
