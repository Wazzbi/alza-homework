import React from 'react';
// Models
import { Data } from '../../../models/products';
// Styles
import styles from '../products.module.scss';
// Components
import ReactStars from 'react-rating-stars-component';
// Bootstraps
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

interface Props {
  product: Data | undefined;
}

export default function ProductCard(props: Props): JSX.Element {
  const { product } = props;

  return (
    <>
      {product && (
        <div
          className={`${styles.product_card} ${styles.carousel_el}`}
        >
          <div>
            <strong>{product.name}</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              At voluptate beatae ab doloremque alias optio aspernatur
              ut.
            </p>
          </div>
          <div>
            <div className={styles.product_img_container}>
              <img
                src={product.img}
                alt=""
                className={styles.product_card_img}
              />
              <div className={styles.stars_above_image}>
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>

            <div className={styles.product_card_price_row}>
              <div className={styles.prices}>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.priceWithoutVat}>
                  {product.priceWithoutVat}
                </span>
              </div>

              <Dropdown as={ButtonGroup}>
                <Button variant="success" size="sm">
                  Koupit
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Koupit zrychleně
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Porovnat
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Hlídat
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Přiložit do seznamu
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={styles.avail}>{product.avail}</div>
          </div>
        </div>
      )}
    </>
  );
}
