import React from 'react';
// Models
import { Data } from '../../../models/products';
// Styles
import styles from '../products.module.scss';
// Components
import ProductCard from './productCard';
// Bootstraps
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

interface Props {
  tabs: Data[][] | undefined;
}

export default function ProductsTab(props: Props): JSX.Element {
  const { tabs } = props;

  // mock
  const tabsTitle = [
    'TOP',
    'Nejprodávanější',
    'Od nejlevnější',
    'Od nejdražší'
  ];

  return (
    <>
      {tabs && (
        <Tabs defaultActiveKey={tabsTitle[0]}>
          {tabs.map((products, index) => (
            <Tab
              key={index}
              eventKey={tabsTitle[index]}
              title={tabsTitle[index]}
            >
              <div className={styles.products_tab}>
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      )}
    </>
  );
}
