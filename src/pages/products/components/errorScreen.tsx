import React from 'react';
//Styles
import styles from '../products.module.scss';

interface Props {
  msg: string;
}

export default function ErrorScreen(props: Props): JSX.Element {
  const { msg } = props;

  return (
    <>
      <div className={styles.screen}>
        <h3>Ups... Stala se chyba</h3>
        <hr />
        <span>{msg}</span>
      </div>
    </>
  );
}
