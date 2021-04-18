import {
  FilterParameters,
  ProductsResponse
} from '../models/products';
import axios, { AxiosPromise } from 'axios';

class productService {
  static getProducts = (
    filterParameters: FilterParameters
  ): AxiosPromise<ProductsResponse> => {
    return axios({
      method: 'POST',
      url: '/Services/RestService.svc/v2/products',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { ...filterParameters },
      timeout: 10000
    });
  };
}

export default productService;
