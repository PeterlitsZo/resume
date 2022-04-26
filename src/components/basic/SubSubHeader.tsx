import type { Component } from 'solid-js';

import styles from './styles/SubSubHeader.module.scss';

const SubSubHeader: Component = ({children}) => {
  return (
    <h4 class={styles.subSubHeader}>{children}</h4>
  );
}

export default SubSubHeader;
