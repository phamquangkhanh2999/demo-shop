import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productData from '../assets/fake-data/products';

import Button from './Button';
import ProductView from './ProductView';

import { remove } from '../redux/product-modal/productModalSlice';

const ProductViewModal = (props) => {
  const produtSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  // const product = productData.getProductBySlug('ao-thun-dinosaur-01');

  useEffect(() => {
    setProduct(productData.getProductBySlug(produtSlug));
  }, [produtSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? '' : 'active'}`}
    >
      <div className='product-view__modal__content'>
        <ProductView product={product} />
        <div
          className='product-view__modal__content__close'
          onClick={() => dispatch(remove())}
        >
          <Button size='sm'>đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
