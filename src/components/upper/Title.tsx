import type { Component } from 'solid-js';

import styles from './styles/Title.module.css';

const Title: Component = () => {
  return (
    <div class={styles.title}>
      <h1 class={styles.name}>周 泓余</h1>
      <h2 class={styles.address}>peterlitszo@gmail.com | 176 2332 5764</h2>
    </div>
  );
}

export default Title;
