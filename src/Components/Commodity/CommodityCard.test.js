/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CommodityCard from './CommodityCard';

describe('CommodityCard', () => {
  const defaultProps = {
    symbol: 'ABC',
    name: 'Test Commodity',
    currency: 'USD',
    stockExchange: 'NYSE',
  };

  test('renders the card with correct props', () => {
    render(
      <MemoryRouter>
        <CommodityCard {...defaultProps} />
      </MemoryRouter>,
    );

    const productElement = screen.getByText(/Product: Test Commodity/i);
    const currencyElement = screen.getByText(/Trading Currency: USD/i);
    const stockExchangeElement = screen.getByText(/Stock Exchange: NYSE/i);
    const buttonElement = screen.getByRole('button', { name: 'Details Price' });

    expect(productElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
    expect(stockExchangeElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/Commodity/ABC');
  });

  test('validates prop types', () => {
    // Silence the prop-type warnings in the console during the test
    const originalError = console.error;
    console.error = jest.fn();

    // Invalid props: missing 'name'
    render(
      <MemoryRouter>
        <CommodityCard
          symbol="ABC"
          currency="USD"
          stockExchange="NYSE"
        />
      </MemoryRouter>,
    );

    // Expect a prop-type warning in the console
    expect(console.error).toHaveBeenCalled();

    console.error = originalError;
  });
});
