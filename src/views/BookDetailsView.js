import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as booksApi from '../services/bookApi'

export default function BookDetailsView() {
  const { bookId } = useParams()
  //   console.log(bookId)
  const [book, setBook] = useState(null)

  useEffect(() => {
    booksApi.getBookById(bookId).then(setBook)
  }, [bookId])

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
