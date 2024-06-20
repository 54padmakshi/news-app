import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articleSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer
  }
});
