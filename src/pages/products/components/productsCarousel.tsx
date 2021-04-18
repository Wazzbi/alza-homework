import React from 'react';
// Models
import { Data } from '../../../models/products';
// Styles
import styles from '../products.module.scss';
// Constants
import { responsive } from '../../../constants';
// Components
import ProductCardCarousel from './productCardCarousel';
// Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  products: Data[] | undefined;
}

export default function ProductsCarousel(props: Props): JSX.Element {
  const { products } = props;

  return (
    <>
      <h3>Nejprodávanější</h3>

      {products && (
        <Carousel
          swipeable={true}
          draggable={true}
          infinite={true}
          responsive={responsive}
          partialVisbile={true}
          containerClass={styles.product_carousel}
        >
          {products.map((p, index) => (
            <ProductCardCarousel key={`cat-${index}`} product={p} />
          ))}
        </Carousel>
      )}
    </>
  );
}
