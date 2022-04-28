import type { Component } from 'solid-js';

import styles from './styles/Tag.module.scss';

const Tag: Component = ({children}) => {
  return (
    <>
      <span class={styles.tag}>{children}</span>
      &nbsp;
    </>
  );
}

export default Tag;
