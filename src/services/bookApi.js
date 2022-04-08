import axios from 'axios'

// axios.defaults.baseURL = 'https://bookslibrary-api.herokuapp.com/api'
axios.defaults.baseURL = 'http://localhost:3000/api'

export async function fetchBooks() {
  const { data } = await axios.get('/books')
  return data.books
}

export async function getBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}`)
  return data.result
}
export async function addBook(book) {
  const { data } = await axios.post('/books', book)

  return data
}

export async function dltBook(id) {
  await axios.delete(`/books/${id}`)
  return id
}
