import React from 'react';
// Models
import { Data } from '../../../models/products';
// Styles
import styles from '../products.module.scss';
// Components
import ReactStars from 'react-rating-stars-component';

interface Props {
  product: Data | undefined;
}

export default function ProductCardCarousel(
  props: Props
): JSX.Element {
  const { product } = props;

  return (
    <>
      {product && (
        <div
          className={`${styles.product_card} ${styles.carousel_el}`}
        >
          <div>
            <img
              src={product.img}
              alt=""
              className={styles.product_card_img}
            />
            <strong>{product.name}</strong>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              At voluptate beatae ab doloremque alias optio aspernatur
              ut.
            </p>
            <p className={styles.product_price}>{product.price}</p>
          </div>
        </div>
      )}
    </>
  );
}
