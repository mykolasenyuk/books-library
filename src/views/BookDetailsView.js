import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'

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
        <>
          <img src={book.thumbnailUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.authors}</p>
          <p>{book.longDescription}</p>
        </>
      )}
    </>
  )
}
