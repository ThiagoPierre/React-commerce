/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import Page from '../../components/Page';
import ProductDetail from '../../components/Product/ProductDetail';
import AppContext from '../../AppContext';

const Product = ({
  match:
        { params: { slug } },
}) => {
  const [state] = useContext(AppContext);
  const Product = state.products.find((product) => product.slug === slug);

  if (!Product) {
    <Page>
      <h1> Product is Loading </h1>
    </Page>;
  }
  return (

    <Page>
      <ProductDetail {...Product} />
    </Page>
  );
};

export default Product;
