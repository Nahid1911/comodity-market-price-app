import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CommodityCard from './CommodityCard';

describe('CommodityCard', () => {
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
