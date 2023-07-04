import { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import CommodityCard from '../Commodity/CommodityCard';
import './CommoditiesContainer.css';

const CommoditiesContainer = () => {
  const CommoditiesArray = useSelector((state) => state.commodityStore.commodities);
  const [filterCommodity, setfilterCommodity] = useState('');

  const filteredCommodities = CommoditiesArray.filter((commodity) => commodity
    .name.toLowerCase().includes(filterCommodity.toLowerCase()));

  const handleSearchChange = (event) => {
    setfilterCommodity(event.target.value);
  };
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Comodities.... Like: gold, platinum"
          // className="me-2"
        aria-label="Search"
        value={filterCommodity}
        onChange={handleSearchChange}
      />
      <Container className="commoditiesContainerDiv">
        {filteredCommodities.map((commodity) => (
          <CommodityCard
            key={commodity.symbol}
            name={commodity.name}
            currency={commodity.currency}
            stockExchange={commodity.stockExchange}
            priceArray={commodity.historicalPrice[0].label}
            priceArray1={commodity.historicalPrice[0].open}
            priceArray2={commodity.historicalPrice[0].close}
          />
        ))}

      </Container>

    </>
  );
};

export default CommoditiesContainer;
