/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import ListGroup from 'react-bootstrap/ListGroup';
import './CommodityCard.css';
import { Button } from 'react-bootstrap';
// import List from 'react-bootstrap/List';

function CommodityCard({
  symbol, name, currency, stockExchange,
}) {
  return (
    <Card className="card-class">
      <Card.Body>
        <h5 className="cardTitle">
          Product:
          {' '}
          {name}
        </h5>
        <div className="cardDiv">
          <div className="div-line">
            Trading Currency:
            {' '}
            {currency}
          </div>
          <div className="div-line">
            Stock Exchange:
            {' '}
            {stockExchange}
          </div>
        </div>
        <div className="buttonContainer">
          <Button variant="primary" as={Link} to={`/Commodity/${symbol}`}>
            Details Price
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CommodityCard;
