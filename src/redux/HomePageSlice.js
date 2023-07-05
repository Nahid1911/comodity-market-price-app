import { CommodityNameUrl } from '../Components/ApiUrl/ApiUrl';
import { UserKey } from '../Components/ApiUrl/API';

export const FETCH_COMMODITIES_SUCCESS = 'FETCH_COMMODITIES_SUCCESS';

export const fetchCommoditiesSuccess = (commodities) => ({
  type: FETCH_COMMODITIES_SUCCESS,
  payload: commodities,
});

const fetchCommodities = () => async (dispatch) => {
  try {
    const response = await fetch(CommodityNameUrl + UserKey);
    const commoditiesData = await response.json();

    dispatch(fetchCommoditiesSuccess(commoditiesData));
  } catch (error) {
    console.error('Error fetching Commodities', error);
  }
};

const initialState = {
  commodities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMODITIES_SUCCESS:
      return {
        ...state,
        commodities: action.payload,
      };
    default:
      return state;
  }
};

export { fetchCommodities };
export default reducer;
