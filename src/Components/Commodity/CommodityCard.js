/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './CommodityCard.css';
import { Button } from 'react-bootstrap';

function CommodityCard({
  name, currency, stockExchange, priceArray, priceArray1, priceArray2,
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
          Trading Curruncy:
          {' '}
          {currency}
        </ListGroup.Item>
        <ListGroup.Item>
          Stock Exchange:
          {' '}
          {stockExchange}
        </ListGroup.Item>
        <ListGroup.Item>
          Date:
          {' '}
          {priceArray}
        </ListGroup.Item>
        <ListGroup.Item>
          High Price:
          {' '}
          {priceArray1}
        </ListGroup.Item>
        <ListGroup.Item>
          Low Price:
          {' '}
          {priceArray2}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-success">
          {' '}
          <Link to="/Commodity">
            See Daywise Price
          </Link>

        </Button>
      </Card.Body>
    </Card>
  );
}

export default CommodityCard;
