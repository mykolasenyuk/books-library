import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { fetchBooks, fetchBookById } from './booksOperations'

const booksAdapter = createEntityAdapter({
  selectId: (book) => book._id,
})

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState({
    loading: false,
  }),
  extraReducers: {
    [fetchBooks.fulfilled](state, action) {
      booksAdapter.upsertMany(state, action.payload)
    },
    [fetchBookById.fulfilled](state, action) {
      booksAdapter.upsertMany(state, [action.payload])
    },
  },
})

const selectors = booksAdapter.getSelectors((state) => state.books)

export const booksSelectors = selectors
export const booksReducer = booksSlice.reducer
