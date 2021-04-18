import React from 'react';
// Styles
import styles from '../products.module.scss';

interface Props {
  categories: string[];
}

export default function ProductsCategories(
  props: Props
): JSX.Element {
  const { categories } = props;

  return (
    <>
      <div className={styles.categories_container}>
        {categories &&
          categories.map((c, index) => (
            <button key={`cat-${index}`}>
              <b>{c}</b>
            </button>
          ))}
      </div>
    </>
  );
}
