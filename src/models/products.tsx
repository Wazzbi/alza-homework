export interface FilterParameters {
  filterParameters: {
    id: number;
    isInStockOnly: boolean;
    newsOnly: boolean;
    wearType: number;
    orderBy: number;
    page: number;
    params: {
      tId: number;
      v: any[];
    };
    producers: any[];
    sendPrices: boolean;
    type: string;
    typeId: string;
    branchId: string;
  };
}

export interface ProductsResponse {
  err: number;
  msg?: any;
  vzt: number;
  user_name: string;
  basket_cnt: number;
  basket_total_cnt: number;
  user_id: number;
  favCnt: number;
  alzaCredit?: any;
  countryID: number;
  countryPhonePrefix: string;
  premiumBooks: number;
  premiumMusic: number;
  premiumMovies: number;
  premiumDelivery: number;
  premiumValidTo?: any;
  premiumRenew: boolean;
  serverTime: number;
  data_cnt: number;
  data: Data[];
  total: number;
  has_next: boolean;
  shareURL: string;
  listDisplayType: number;
  hierachicalFilterResult?: any;
  prices_cnt: number;
  prices: Price[];
  producers_cnt: number;
  producers: Producer[];
  parameters_cnt: number;
  parameters: Parameter[];
}

export interface Promo {
  id: number;
  name: string;
  img: string;
  count: number;
  price: string;
  is_enabled: boolean;
  order: number;
}

export interface Data {
  canCashBack: boolean;
  canChangeQuantity: boolean;
  cashBackPrice?: any;
  cashBackPriceLabel?: any;
  cashBackType: number;
  catalog_number: string;
  userOwns: boolean;
  id: number;
  code: string;
  img: string;
  name: string;
  spec: string;
  price: string;
  cprice: string;
  priceWithoutVat: string;
  avail: string;
  avail_postfix: string;
  availLegend?: any;
  avail_postfix2?: any;
  avail_color: string;
  is_action: boolean;
  action_name: string;
  rating: number;
  promo_cnt: number;
  promos: Promo[];
  order: number;
  is_special_service: boolean;
  type: number;
  can_buy: boolean;
  itemType: string;
  orderItemId?: any;
  maxCanBuy?: number;
  url: string;
  supplierCode: string;
  minimumAmount: number;
  amountInPack: number;
  start_time?: any;
  end_time?: any;
  variant_type: number;
  priceNoCurrency: number;
  categoryName?: any;
  inBasket: number;
  actionCategoryIconsUrl: string[];
}

export interface Price {
  k: number;
  v: string;
}

export interface Producer {
  id: number;
  desc: string;
  v: number;
  visibility: boolean;
  cnt: number;
  imgUrl: string;
  selected: boolean;
}

export interface V {
  k: number;
  v: number;
}

export interface Parameter {
  tId: number;
  v_cnt: number;
  v: V[];
}
