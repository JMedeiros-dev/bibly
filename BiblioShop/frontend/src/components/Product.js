import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='shadow-sm p-3 my-3 bg-body rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div' className='truncate'>
            <strong className='text-secondary'>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={
              product.numReviews === 1
                ? `${product.numReviews} review`
                : `${product.numReviews} reviews`
            }
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
