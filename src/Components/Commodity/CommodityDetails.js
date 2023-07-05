import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function CommodityDetailsPrice() {
  const historicalPrice = useSelector((state) => state.commodities);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {historicalPrice.map((item) => (
            <th key={1}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {historicalPrice.map((_, index) => (
            <td key={2}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default CommodityDetailsPrice;
