import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CommodityDetailsPrice from './CommodityDetails';

describe('CommodityDetailsPrice', () => {
  // Mock the useParams and fetch functions
  jest.mock('react-router-dom', () => ({
    useParams: () => ({ symbol: 'COMMODITY_SYMBOL' }),
    Link: 'a',
  }));

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        historical: [
          {
            date: '2023-01-01',
            open: 100,
            high: 200,
            low: 50,
            close: 150,
            volume: 1000,
          },
        ],
      }),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading message initially', async () => {
    const { getByText } = render(<CommodityDetailsPrice />);
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {});
  });

  it('renders "No historical data available" when historical data is empty', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ historical: [] }),
    }));
    const { getByText } = render(<CommodityDetailsPrice />);
    await waitFor(() => {});

    expect(getByText('No historical data available.')).toBeInTheDocument();
  });
});
