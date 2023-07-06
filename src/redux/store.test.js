import { configureStore } from '@reduxjs/toolkit';
import reducer from './HomePageSlice';

describe('HomePageSlice store', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        commodityStore: reducer,
      },
    });
  });

  it('should have the correct initial state', () => {
    const initialState = {
      commodities: [],
    };

    expect(store.getState().commodityStore).toEqual(initialState);
  });
});
