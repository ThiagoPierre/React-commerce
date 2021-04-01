import React, { useContext } from 'react';
import ProductList from '../../components/Product/ProductList';
import Page from '../../components/Page/index';
import AppContext from '../../AppContext';

const index = () => {
  const [{ products }] = useContext(AppContext);
  return (

    <Page>
      <ProductList products={products} />
    </Page>
  );
};

export default index;
