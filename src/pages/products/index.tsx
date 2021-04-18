import React, { useEffect, useState } from 'react';
//services
import productService from '../../services/productService';
//components
import ProductsView from './productsView';
//constants
import { homeworkPost } from '../../constants';
import { ProductsResponse } from '../../models/products';
import { AxiosResponse } from 'axios';

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<ProductsResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // get list of products (this case: Notebooks)
    productService
      .getProducts(homeworkPost)
      .then((res: AxiosResponse<ProductsResponse>) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ProductsView products={products} isLoading={isLoading} />
    </>
  );
}
