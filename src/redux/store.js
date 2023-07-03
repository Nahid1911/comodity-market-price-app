import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './HomePageSlice';

const store = configureStore({
  reducer: {
    homePageReducer,
  },

});

export default store;
