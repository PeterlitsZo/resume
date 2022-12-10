import type { Component, ParentComponent, ParentProps } from 'solid-js';

import classNames from 'classnames';

import styles from './styles/SubHeader.module.scss';

interface HeaderCompoentProps {
  class?: string;
}

interface HeaderCompoent extends Component<HeaderCompoentProps> {
  Title: Component;
  Helper: Component;
}

const SubHeader = (props: ParentProps<HeaderCompoentProps>) => {
  const { class: className, children } = props;

  return (
    <h3 class={classNames(className, styles.subHeader)}>
      {children}
    </h3>
  );
}

SubHeader.Title = (props: ParentProps) => {
  return <span class={styles.title}>{props.children}</span>;
}

SubHeader.Helper = (props: ParentProps) => {
  return <span class={styles.helper}>{props.children}</span>;
}

export default SubHeader;
