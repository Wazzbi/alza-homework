import React from 'react';
// Styles
import styles from '../products.module.scss';

export default function LoadingScreen(): JSX.Element {
  return (
    <>
      <div className={styles.screen}>
        <h3>Načítání...</h3>
      </div>
    </>
  );
}
