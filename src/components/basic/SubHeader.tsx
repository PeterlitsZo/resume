import type { Component } from 'solid-js';

import classNames from 'classnames';

import styles from './styles/SubHeader.module.scss';

interface HeaderCompoentProps {
  class?: string;
}

interface HeaderCompoent extends Component<HeaderCompoentProps> {
  Title: Component;
  Helper: Component;
}

const SubHeaderMain: Component<HeaderCompoentProps> = (props) => {
  const { class: className, children } = props;

  return (
    <h3 class={classNames(className, styles.subHeader)}>
      {children}
    </h3>
  );
}

const SubHeaderTitle: Component = ({ children }) => {
  return <span class={styles.title}>{children}</span>;
}

const SubHeaderHelper: Component = ({ children }) => {
  return <span class={styles.helper}>{children}</span>;
}

const SubHeader: HeaderCompoent = 
  Object.assign(SubHeaderMain, { Title: SubHeaderTitle, Helper: SubHeaderHelper })

export default SubHeader;
