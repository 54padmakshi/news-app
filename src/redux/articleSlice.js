/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'd111530a0e954666adf9d7a3f8574faa';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category, { getState, rejectWithValue }) => {
    const { currentPage } = getState().articles;
    const url = `${BASE_URL}?apiKey=${API_KEY}&q=${category || 'general'}&page=${currentPage}&pageSize=10`;

    try {
      console.log(`Fetching articles from: ${url}`);
      const response = await axios.get(url);
      console.log('API Response:', response);
      return response.data.articles;
    } catch (error) {
      console.error('API Request Failed:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
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
    selectedCategory: 'general'
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.totalPages = Math.ceil(action.payload.totalResults / 10);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export const { setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;

---this works in local server not in netlify

*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/.netlify/functions/fetchNews';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category, { getState, rejectWithValue }) => {
    const { currentPage } = getState().articles;
    const url = `${BASE_URL}?q=${category || 'general'}&page=${currentPage}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data.articles;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
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
    selectedCategory: 'general'
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.totalPages = Math.ceil(action.payload.totalResults / 10);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export const { setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
