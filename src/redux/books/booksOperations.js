import { createAsyncThunk } from '@reduxjs/toolkit'
import * as bookApi from '../../services/bookApi'

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookApi.fetchBooks()
      return books
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (bookId) => {
    const book = await bookApi.getBookById(bookId)

    return book
  },
)
