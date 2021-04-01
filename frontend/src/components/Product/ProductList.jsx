import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import AppContext, { Types } from '../../AppContext';
import ProductCard from './ProductCard';
import Page from '../Page';

const ProductList = ({ products = [] }) => {
  const [{ favorites }, dispatch] = useContext(AppContext);
  const history = useHistory();

  const onClickFavorite = (product) => {
    dispatch({ type: Types.TOGGLE_FAVORITES, payload: product.id });
  };

  return (
    <Page>
      <Row>
        {products.map((product) => (
          <Col xl={4} xm={4} xs={6}>
            <ProductCard
              onClickCard={() => history.push(`/product/${product.slug}`)}
              FavoriteIcon={favorites.includes(product.id) ? 'full' : 'blank'}
              onClickFavorite={() => onClickFavorite(product)}
              key={product.id}
              image={product.images.find((image) => image.isDefault).url}
              productTitle={product.name}
              productPrice={`${product.price.value} ${product.price.currencyCode}`}
            />
          </Col>
        ))}
      </Row>
    </Page>

  );
};

export default ProductList;
