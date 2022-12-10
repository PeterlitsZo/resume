import type { ParentComponent } from 'solid-js';

import styles from './styles/SubSubHeader.module.scss';

const SubSubHeader: ParentComponent = (props) => {
  return (
    <h4 class={styles.subSubHeader}>{props.children}</h4>
  );
}

export default SubSubHeader;
