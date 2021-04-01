import React from 'react';
import { Row, Col } from 'react-bootstrap';
/* import AppContext from '../../AppContext'; */

export default function ProductDetail({
  name, description, images = [], price,
}) {
  const defaultImage = images.find((image) => image.isDefault)?.url;

  return (
    <Row>
      <Col xl={6}>
        <h1>{name}</h1>
        <h3>
          {price.value}
          {' '}
          {price.currencyCode}
        </h3>
        <img
          draggable={false}
          width="500"
          src={defaultImage}
          alt=""
          height="500"
        />
      </Col>
      <Col xl={6} dangerouslySetInnerHTML={{ __html: description }} />
    </Row>
  );
}
