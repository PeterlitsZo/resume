import type { ParentComponent } from 'solid-js';

import styles from './styles/Tag.module.scss';

const Tag: ParentComponent = (props) => {
  return (
    <>
      <span class={styles.tag}>{props.children}</span>
      &nbsp;
    </>
  );
}

export default Tag;
