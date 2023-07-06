import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CommodityCard.css';
import { Button } from 'react-bootstrap';

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

CommodityCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  stockExchange: PropTypes.string.isRequired,
};

export default CommodityCard;
