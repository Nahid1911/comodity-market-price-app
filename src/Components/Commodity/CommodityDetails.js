/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
// import { CommodityHistoryPriceUrl } from '../ApiUrl/ApiUrl';
import { UserKey } from '../ApiUrl/API';

function CommodityDetailsPrice() {
  const { symbol } = useParams();
  const [commodityData, setCommodityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3//historical-price-full/${symbol}${UserKey}`);
        const data = await response.json();
        setCommodityData(data);
      } catch (error) {
        console.error('Error fetching commodity details', error);
      }
    };

    fetchData();
  }, [symbol]);

  if (!commodityData) {
    return <div>Loading...</div>;
  }

  const { historical } = commodityData;

  if (!historical || historical.length === 0) {
    return <div>No historical data available.</div>;
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>SL. No.</th>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {historical.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.date}</td>
            <td>{item.open}</td>
            <td>{item.high}</td>
            <td>{item.low}</td>
            <td>{item.close}</td>
            <td>{item.volume}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CommodityDetailsPrice;
