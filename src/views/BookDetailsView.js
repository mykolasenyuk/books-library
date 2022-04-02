import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'
import {Container,Card, CardMedia,CardContent,Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"



const useStyles = makeStyles((theme)=>({
  root:{
    flexHGrow:1
  },
  cardMedia:{
    paddingTop:"100%",
    
    
  },
  cardContent:{
   flexGrow:1 
  },
  cardGrid:{
    marginTop:theme.spacing(4)
  },
  cardTitle:{
    fontSize: theme.spacing(4),
    textDecoration: "none",
    color: "rgb(15, 16, 59)"
  },
  cardDescr:{
    
    textDecoration: "none",
    color: "rgb(15, 16, 59)"
  },
  card:{
   
    margin: theme.spacing(3),
    marginTop:theme.spacing(5),
    padding:theme.spacing(7),
    borderRadius: '10px' 
  }
 
}))

export default function BookDetailsView() {
  const classes = useStyles()

  const { bookId } = useParams()
  const dispatch = useDispatch()

  const book = useSelector((state) => booksSelectors.selectById(state, bookId))

  useEffect(() => {
    dispatch(booksOperations.fetchBookById(bookId))
  }, [bookId, dispatch])

  return (
    <>


      {book && (
        <Container fixed>
          <Card className={classes.card}>
          <CardMedia 
  className={classes.cardMedia}
  image={ book.thumbnailUrl ? `${book.thumbnailUrl}`
  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`}
  title={book.title} />
          <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle}>{book.title}</Typography>
          <Typography className={classes.cardDescr}>Authors: {book.authors}</Typography>
          <Typography className={classes.cardDescr}>Pages:  {book.pageCount}</Typography>
          <Typography className={classes.cardDescr}>Description: {book.longDescription}</Typography>
          </CardContent>
          </Card>
        </Container>
      )}
    </>
  )
}
