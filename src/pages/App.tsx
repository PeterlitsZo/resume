import type { Component } from 'solid-js';

import Title from '../components/upper/Title';
import Left from '../components/upper/Left/Left';
import Right from '../components/upper/Right';
import Footer from '../components/upper/Footer';

import styles from './styles/App.module.scss';
import vars from '../_vars.scss';

const getVars = () => {
  const body = vars.match(/:export\s*{(.*)}/s);
  const result = {} as { [key: string]: string };
  body?.[1]?.split(';').forEach((val) => {
    const kvPair = val.trim().split(':');
    if (kvPair.length === 2) {
      result[kvPair[0].trim()] = kvPair[1].trim();
    }
  })
  return result;
}

const App: Component = () => {
  let root: HTMLDivElement | undefined = undefined;
  let vars = getVars();

  console.log(vars);

  return (
    <>
      <div ref={root} class={styles.root}>
        <Title />
        <div class={styles.body}>
          <Left class={styles.left} />
          <Right class={styles.right} />
        </div>
        <Footer class={styles.footer}/>
      </div>
      <div class={styles.error_msg}>
        Please use the device (width &gt; {vars.width}) to view my resume.
      </div>
    </>
  );
};

export default App;
