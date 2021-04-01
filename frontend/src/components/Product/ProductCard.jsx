import React from 'react';
import { Card } from 'react-bootstrap';
import { BsFillHeartFill } from 'react-icons/bs';

const index = ({
  image, productPrice, productTitle, onClickFavorite, FavoriteIcon, onClickCard,
}) => (
  <Card onClick={onClickCard}>
    <Card.Img variant="top" src={image} />
    <Card.ImgOverlay>
      <button className="icon-button" type="button">
        <BsFillHeartFill
          className={FavoriteIcon}
          onClick={onClickFavorite}
        />
      </button>
    </Card.ImgOverlay>
    <Card.Body className="bg-white">
      <Card.Title>{productTitle}</Card.Title>
      <Card.Text>
        {productPrice}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default index;
