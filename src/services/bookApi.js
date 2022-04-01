import axios from 'axios'

axios.defaults.baseURL = 'https://bookslibrary-api.herokuapp.com/api'

export async function fetchBooks() {
  const { data } = await axios.get('/books')
  return data.books
}

export async function getBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}`)
  return data.result
}
export async function addContact(book) {
  const { data } = await axios.post('/', book)

  return data
}

export async function dltContact(id) {
  await axios.delete(`/books/${id}`)
  return id
}
