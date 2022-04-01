import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'
import s from './BookDetailsView.module.css'
// import * as booksApi from '../services/bookApi'

export default function BookDetailsView() {
  const { bookId } = useParams()
  const dispatch = useDispatch()

  const book = useSelector((state) => booksSelectors.selectById(state, bookId))

  useEffect(() => {
    dispatch(booksOperations.fetchBookById(bookId))
  }, [bookId, dispatch])

  return (
    <>
      <h2>BookDetails</h2>

      {book && (
        <div className={s.bookContainer}>
          <img className={s.bookImage} src = { book.thumbnailUrl ? `${book.thumbnailUrl}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`} alt={book.title} />
          <div className={s.bookDetailsContainer}>
          <h2 className={s.bookTitle}>{book.title}</h2>
          <p className={s.text}>Authors: {book.authors}</p>
          <p className={s.text}>Pages: {book.pageCount}</p>
          <p className={s.bookDescription}>{book.longDescription}</p>
          </div>
          
        </div>
      )}
    </>
  )
}
