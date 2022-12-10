import type { ParentComponent } from 'solid-js';

import styles from './styles/Header.module.scss';

const Header: ParentComponent = (props) => {
  return (
    <h2 class={styles.header}>{props.children}</h2>
  );
}

export default Header;
