import { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import CommodityCard from '../Commodity/CommodityCard';
import './CommoditiesContainer.css';

const CommoditiesContainer = () => {
  const CommoditiesArray = useSelector((state) => state.commodityStore.commodities);
  const [filterCommodity, setFilterCommodity] = useState('');

  const filteredCommodities = CommoditiesArray.filter((commodity) => commodity
    .name.toLowerCase().includes(filterCommodity.toLowerCase()));

  const handleSearchChange = (event) => {
    setFilterCommodity(event.target.value);
  };

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Commodities... (e.g., gold, platinum)"
        aria-label="Search"
        value={filterCommodity}
        onChange={handleSearchChange}
      />
      <Container className="commoditiesContainerDiv">
        {filteredCommodities.map((commodity) => {
          const firstHistoricalPrice = commodity.historicalPrice?.[0]?.date ?? '';
          return (
            <CommodityCard
              key={commodity.symbol}
              name={commodity.name}
              currency={commodity.currency}
              stockExchange={commodity.stockExchange}
              priceArray={firstHistoricalPrice}
            />
          );
        })}
      </Container>
    </>
  );
};

export default CommoditiesContainer;
