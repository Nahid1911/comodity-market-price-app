import { fetchCommodities, fetchCommoditiesSuccess } from './HomePageSlice';

// Mock the fetch function
global.fetch = jest.fn();

describe('fetchCommodities', () => {
  const dispatch = jest.fn();
  const mockCommodityNameUrl = 'mocked_commodity_name_url';
  const mockUserKey = 'mocked_user_key';

  beforeEach(() => {
    fetch.mockClear();
    dispatch.mockClear();
  });

  it('should dispatch fetchCommoditiesSuccess with the expected commodities data', async () => {
    const expectedCommodities = [
      { symbol: 'GOLD', name: 'Gold' },
      { symbol: 'SILVER', name: 'Silver' },
    ];

    const mockResponse = {
      json: jest.fn().mockResolvedValue(expectedCommodities),
    };

    fetch.mockResolvedValue(mockResponse);

    // Call the fetchCommodities function
    await fetchCommodities(mockCommodityNameUrl, mockUserKey)(dispatch);

    expect(fetch).toHaveBeenCalledWith(mockCommodityNameUrl + mockUserKey);
    expect(mockResponse.json).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(fetchCommoditiesSuccess(expectedCommodities));
  });

  it('should handle errors and log them', async () => {
    console.error = jest.fn(); // Mock console.error

    const mockError = new Error('API request failed');
    fetch.mockRejectedValue(mockError);

    // Call the fetchCommodities function
    await fetchCommodities(mockCommodityNameUrl, mockUserKey)(dispatch);

    expect(fetch).toHaveBeenCalledWith(mockCommodityNameUrl + mockUserKey);
    expect(console.error).toHaveBeenCalledWith('Error fetching Commodities', mockError);
  });
});
