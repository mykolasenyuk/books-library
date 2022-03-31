import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export async function fetchBooks() {
  const { data } = await axios.get('/books')
  return data.books
}

export async function getBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}`)
  return data.result
}
// export async function addContact(book) {
//   const { data } = await axios.post('/contacts', contact)

//   return data
// }

// export async function dltContact(id) {
//   await axios.delete(`/contacts/${id}`)
//   return id
// }
