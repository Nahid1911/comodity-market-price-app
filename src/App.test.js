import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './Components/NavBar/NavBar';
import CommodityDetailsPrice from './Components/Commodity/CommodityDetails';

describe('App', () => {
  it('renders NavBar', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const navBar = getByText('Commodities Current Price App');
    expect(navBar).toBeInTheDocument();
  });

  it('renders CommodityDetailsPrice', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Commodity/ABC']}>
          <CommodityDetailsPrice />
        </MemoryRouter>
      </Provider>,
    );
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
