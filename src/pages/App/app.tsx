import type { Component } from 'solid-js';

import Title from '../../components/upper/Title';
import Left from '../../components/upper/Left/Left';
import Right from '../../components/upper/Right';
import Footer from '../../components/upper/Footer';
import Bar from '../../components/Bar';

import styles from './app.module.scss';

export const App: Component = () => {
  let root: HTMLDivElement | undefined = undefined;

  return (
    <>
      <Bar />
      <div ref={root} class={styles.root}>
        <div class={styles.Time}>
          更新于 2022 / 12 / 10 日
        </div>
        <Title class={styles.title} />
        <div class={styles.body}>
          <Left class={styles.left} />
          <Right class={styles.right} />
        </div>
        <Footer class={styles.footer}/>
      </div>
    </>
  );
};

export default App;