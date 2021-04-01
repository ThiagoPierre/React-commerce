import React from 'react';
import { Container } from 'react-bootstrap';

const index = ({ title, children }) => (
  <Container className="mt-5">
    <h1>{title}</h1>
    <section>{children}</section>
  </Container>
);

export default index;
