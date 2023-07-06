/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './CommodityCard.css';
import { Button } from 'react-bootstrap';

function CommodityCard({
  symbol, name, currency, stockExchange,
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Product:
          {' '}
          {name}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Trading Currency:
          {' '}
          {currency}
        </ListGroup.Item>
        <ListGroup.Item>
          Stock Exchange:
          {' '}
          {stockExchange}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-success" as={Link} to={`/Commodity/${symbol}`}>
          See Daywise Price
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CommodityCard;
