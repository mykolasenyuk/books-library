import { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'
import {Container,Grid,Card, CardMedia,CardContent,Typography, Button} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme)=>({
  root:{
    flexHGrow:1
  },
  cardMedia:{
    paddingTop:"100%"
  },
  cardContent:{
   flexGrow:1 
  },
  cardGrid:{
    marginTop:theme.spacing(4)
  },
  cardTitle:{
    textDecoration: "none",
    color: "rgb(15, 16, 59)"
  },
 

 

}))

export default function LibraryView() {
  const classes = useStyles()

  const { url } = useRouteMatch()
  const dispatch = useDispatch()
  const books = useSelector(booksSelectors.selectAll)
  // console.log(books.length);
  useEffect(() => {
     dispatch(booksOperations.fetchBooks())
  }, [dispatch, books.length])
  // dispatch(booksOperations.fetchBooks())
  function onDelete(id) {
    dispatch(booksOperations.deleteBook(id))
    dispatch(booksOperations.fetchBooks());
   console.log(books.length)
  }
  return (
   
    <Container className={classes.cardGrid}>
    {books && !!books.length && (

<Grid container spacing={4}>
  {books.map((book) => (
    <Grid   item key={book._id} xs={12} sm={6} md={4}>
      <Card>
      <Link  to={`${url}/${book._id}`}>
      <CardMedia 
  className={classes.cardMedia}
  image={ book.thumbnailUrl ? `${book.thumbnailUrl}`
  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`}
  title={book.title} />
     
          <CardContent className={classes.cardContent}>
      <Typography  className={classes.cardTitle} variant='h6' >{book.title}</Typography>
      </CardContent>
      </Link>
      <Button onClick={()=>{onDelete(book._id)}}>Delete</Button>
      </Card>
    </Grid>
  ))}
</Grid>
)}
      </Container>
  )
}
