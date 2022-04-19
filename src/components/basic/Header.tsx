import type { Component } from 'solid-js';

import styles from './styles/Header.module.css';

const Left: Component = ({children}) => {
  return (
    <h2 class={styles.header}>{children}</h2>
  );
}

export default Left;
