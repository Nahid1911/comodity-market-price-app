import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import {
  fetchCommoditiesSuccess,
  fetchCommodities,
  FETCH_COMMODITIES_SUCCESS,
} from './HomePageSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HomePageSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should create an action to fetch commodities success', () => {
    const commodities = [{ symbol: 'GOLD', name: 'Gold' }];
    const expectedAction = {
      type: FETCH_COMMODITIES_SUCCESS,
      payload: commodities,
    };
    expect(fetchCommoditiesSuccess(commodities)).toEqual(expectedAction);
  });

  it('should dispatch fetchCommoditiesSuccess action', async () => {
    const expectedCommodities = [
      {
        currency: 'USD1',
        exchangeShortName: 'COMMODITY1',
        name: 'Commodity 1',
        stockExchange: 'Stock Exchange1',
        symbol: 'SYMBOL1',
      },
      // Add the other expected commodities here
    ];

    const apiUrl = 'https://financialmodelingprep.com/api/v3/historical-price-full/?apikey=d53d14604708d51673198b4420c4c9af';
    fetchMock.mockResponseOnce(JSON.stringify(expectedCommodities), { url: apiUrl });

    const store = mockStore({ commodities: [] });

    const expectedActions = [
      {
        type: FETCH_COMMODITIES_SUCCESS,
        payload: expectedCommodities,
      },
    ];

    await store.dispatch(fetchCommodities());

    const receivedActions = store.getActions();

    expect(receivedActions).toEqual(expectedActions);
  });
});
