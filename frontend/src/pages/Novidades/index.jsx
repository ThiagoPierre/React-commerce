import React from 'react';
import ProductCard from '../../components/Product/ProductCard';
import camisa from '../../Images/camisa.png';

const News = () => (
  <ProductCard productTitle="Bom dia" productPrice="R$9.500,00" product={camisa} />
);

export default News;
