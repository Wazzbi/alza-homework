import React from 'react';
// Models
import { ProductsResponse } from '../../models/products';
// Components
import ErrorScreen from './components/errorScreen';
import ProductsScreen from './components/productsScreen';

interface Props {
  products: ProductsResponse | null;
  isLoading: boolean;
}

export default function ProductsView(props: Props): JSX.Element {
  const { err, msg, data } = props.products || {};
  const { isLoading } = props;

  return (
    <>
      {/* if error... */}
      {(!!err || !!msg) && <ErrorScreen msg={msg} />}
      {/* ...otherwise */}
      {!err && !msg && (
        <ProductsScreen products={data} isLoading={isLoading} />
      )}
    </>
  );
}
