import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'd111530a0e954666adf9d7a3f8574faa';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category, { getState }) => {
    const { currentPage } = getState().articles;
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        q: category || 'general',
        page: currentPage,
        pageSize: 10,
      },
    });
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
    selectedCategory: 'general',
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / 10);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
