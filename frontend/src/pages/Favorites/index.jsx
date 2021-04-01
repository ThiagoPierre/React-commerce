import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import Page from '../../components/Page';
import ProductList from '../../components/Product/ProductList';

const WishList = () => {
  const [{ favorites, products }] = useContext(AppContext);

  const productInFavorites = products.filter((product) => favorites.includes(product.id));

  return (
    <Page title="Wishlist">
      <ProductList products={productInFavorites} />
    </Page>
  );
};

export default WishList;
