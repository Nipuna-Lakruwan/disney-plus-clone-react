import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/movie/UserReducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    user: userReducer,
  },
});
