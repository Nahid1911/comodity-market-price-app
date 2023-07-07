import {
  BaseUrl, SymbleForComodities, HistoricalFull,
} from './API';

const CommodityNameUrl = `${BaseUrl + SymbleForComodities}`;
const CommodityHistoryPriceUrl = `${BaseUrl + HistoricalFull}`;

export { CommodityNameUrl, CommodityHistoryPriceUrl };
