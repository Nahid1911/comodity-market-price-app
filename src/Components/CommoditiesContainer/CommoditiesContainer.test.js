/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CommoditiesContainer from './CommoditiesContainer';

// Mock the redux store
const mockStore = configureStore([]);
const initialState = {
  commodityStore: {
    commodities: [
      {
        symbol: 'ABC',
        name: 'Gold',
        currency: 'USD',
        stockExchange: 'NYSE',
      },
      {
        symbol: 'DEF',
        name: 'Silver',
        currency: 'USD',
        stockExchange: 'NYSE',
      },
    ],
  },
};
const store = mockStore(initialState);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('CommoditiesContainer', () => {
  test('renders the container with filtered commodities', () => {
    render(
      <Provider store={store}>
        <CommoditiesContainer />
      </Provider>,
    );

    // Assert the loading state
    expect(screen.getByLabelText('Search')).toBeInTheDocument();

    // Assert the rendered commodities
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Commodities... (e.g., gold, platinum)')).toBeInTheDocument();
    expect(screen.getByText('Product: Gold')).toBeInTheDocument();
    expect(screen.getByText('Product: Silver')).toBeInTheDocument();
  });
});
