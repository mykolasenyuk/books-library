import { useEffect } from 'react'
// import * as booksApi from '../services/bookApi'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { booksOperations } from '../redux/books'
import { booksSelectors } from '../redux/books/booksSlice'

export default function LibraryView() {
  const { url } = useRouteMatch()
  //   const [books, setBooks] = useState(null)
  const dispatch = useDispatch()
  const books = useSelector(booksSelectors.)

  useEffect(() => {
    dispatch(booksOperations.fetchBooks())
  }, [dispatch])
  return (
    <>
      <h1>Library</h1>

      {books && (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <Link to={`${url}/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
