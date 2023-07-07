import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import CommoditiesContainer from './CommoditiesContainer';

const mockStore = configureStore([]);

// Create a mock store with initial state
const initialState = {
  commodityStore: {
    commodities: [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        currency: 'USD',
        stockExchange: 'NASDAQ',
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        currency: 'USD',
        stockExchange: 'NASDAQ',
      },
    ],
  },
};
const store = mockStore(initialState);
describe('CommoditiesContainer', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CommoditiesContainer />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('renders the search input', () => {
    const searchInput = screen.getByPlaceholderText('Search Commodities... (e.g., gold, platinum)');
    expect(searchInput).toBeInTheDocument();
  });

  it('updates the filtered commodities when the search input value changes', () => {
    const searchInput = screen.getByPlaceholderText('Search Commodities... (e.g., gold, platinum)');

    fireEvent.change(searchInput, { target: { value: 'apple' } });

    const commodityCards = screen.getAllByTestId('commodity-card');
    expect(commodityCards.length).toBe(1);
    expect(commodityCards[0]).toHaveTextContent(/Apple Inc./i);
    expect(commodityCards[0]).toHaveTextContent(/USD/i);
    expect(commodityCards[0]).toHaveTextContent(/NASDAQ/i);
  });
});
