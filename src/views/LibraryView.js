import { useEffect } from 'react'
// import * as booksApi from '../services/bookApi'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'
import s from './LibraryView.module.css';


export default function LibraryView() {
  const { url } = useRouteMatch()
  const dispatch = useDispatch()
  const books = useSelector(booksSelectors.selectAll)
  useEffect(() => {
    dispatch(booksOperations.fetchBooks())
  }, [dispatch])
  return (
   
    <>
      

      {books && books.length>0 && (

        <ul className={s.gallery}>
          {books.map((book) => (
            <li key={book._id}  className={s.galleryItem}>
              <Link to={`${url}/${book._id}`}>
              <img  className={s.galleryImage} src = { book.thumbnailUrl ? `${book.thumbnailUrl}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`} alt = {book.title}/>
              <p  className={s.galleryTitle}>{book.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
