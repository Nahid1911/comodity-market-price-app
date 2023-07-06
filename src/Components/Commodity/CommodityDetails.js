/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { UserKey } from '../ApiUrl/API';
import { CommodityHistoryPriceUrl } from '../ApiUrl/ApiUrl';

function CommodityDetailsPrice() {
  const { symbol } = useParams();
  const [commodityData, setCommodityData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`${CommodityHistoryPriceUrl}${symbol}${UserKey}`);
    if (response.ok) {
      try {
        const data = await response.json();
        setCommodityData(data);
      } catch (error) {
        console.error('Error fetching commodity details', error);
      }
    } else {
      console.error('Error fetching commodity details', response.status);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!commodityData) {
    return <div>Loading...</div>;
  }

  const { historical } = commodityData;

  if (!historical || historical.length === 0) {
    return <div>No historical data available.</div>;
  }

  return (
    <>
      <Button variant="info" as={Link} to="/">
        Back to Home
      </Button>
      <h3>
        Commodity Name:
        { ' ' }
        {symbol}
      </h3>
      <Table variant="success border border-success" responsive>
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
    </>
  );
}

export default CommodityDetailsPrice;
