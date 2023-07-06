import { configureStore } from '@reduxjs/toolkit';
import reducer from './HomePageSlice';

const store = configureStore({
  reducer: {
    commodityStore: reducer,
  },
});

export default store;
