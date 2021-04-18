import React from 'react';
// Models
import { Data } from '../../../models/products';
// Styles
import styles from '../products.module.scss';
// Constants
import { notebookCategories } from '../../../constants';
// Components
import ProductsCategories from './productCategories';
import ProductsCarousel from './productsCarousel';
import ProductsTab from './productsTabs';
import LoadingScreen from './loadingScree';

interface Props {
  products: Data[] | undefined;
  isLoading: boolean;
}

export default function ProductsScreen(props: Props): JSX.Element {
  const { products } = props;
  const { isLoading } = props;

  // mocks for carousel purpose
  const mock = products?.slice(0, 20) || [];
  const mockTabs: Data[][] = [mock, mock, mock, mock];

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={styles.screen}>
          <h1>Notebooky</h1>
          <ProductsCategories categories={notebookCategories} />
          <ProductsCarousel products={mock} />
          <ProductsTab tabs={mockTabs} />
        </div>
      )}
    </>
  );
}
