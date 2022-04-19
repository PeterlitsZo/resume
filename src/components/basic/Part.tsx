import type { Component } from 'solid-js';

import classNames from 'classnames';

import styles from './styles/Part.module.scss';

interface PartProps {
    class?: string;
}

const Left: Component<PartProps> = (props) => {
  const { class: className, children } = props;

  return (
    <div class={classNames(className, styles.part)}>
      {children}
    </div>
  );
}

export default Left;
