import type { Component } from 'solid-js';

import styles from './styles/Title.module.scss';

interface TitleProps {
    class?: string;
}

const Title: Component<TitleProps> = (props) => {
  console.log('titleProps', props);

  return (
    <div class={`${styles.title} ${props.class}`}>
      <h1 class={styles.name}>周 泓余</h1>
      <h2 class={styles.address}>peterlitszo@gmail.com | 176 2332 5764</h2>
    </div>
  );
}

export default Title;
