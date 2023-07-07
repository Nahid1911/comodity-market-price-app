import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import CommodityCard from '../Commodity/CommodityCard';
import { fetchCommodities } from '../../redux/HomePageSlice';
import './CommoditiesContainer.css';
import { CommodityNameUrl } from '../ApiUrl/ApiUrl';
import { UserKey } from '../ApiUrl/API';

const CommoditiesContainer = () => {
  const commodities = useSelector((state) => state.commodityStore.commodities);
  const [filterCommodity, setFilterCommodity] = useState('');

  const filteredCommodities = commodities.filter((commodity) => commodity
    .name.toLowerCase().includes(filterCommodity.toLowerCase()));

  const handleSearchChange = (event) => {
    setFilterCommodity(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (commodities.length === 0) {
      dispatch(fetchCommodities(CommodityNameUrl, UserKey));
    }
  }, [dispatch, commodities]);

  return (
    <>
      <Form.Control
        className="formControl"
        type="search"
        placeholder="Search Commodities... (e.g., gold, platinum)"
        aria-label="Search"
        value={filterCommodity}
        onChange={handleSearchChange}
      />
      <Container fluid className="commoditiesContainerDiv">
        {filteredCommodities.map((commodity) => (
          <CommodityCard
            key={commodity.symbol}
            symbol={commodity.symbol}
            name={commodity.name}
            currency={commodity.currency}
            stockExchange={commodity.stockExchange}
          />
        ))}
      </Container>
    </>
  );
};

export default CommoditiesContainer;
