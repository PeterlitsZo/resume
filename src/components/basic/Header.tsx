import type { Component } from 'solid-js';

import styles from './styles/Header.module.css';

const Header: Component = ({children}) => {
  return (
    <h2 class={styles.header}>{children}</h2>
  );
}

export default Header;
