import type { Component } from "solid-js";
import { useTag } from "../../contexts/tag";

import Button from '../Button';
import Dropdown from '../Dropdown';

import styles from './bar.module.scss';

export const Bar: Component = () => {
  const [tag, setTag] = useTag();

  return (
    <div class={styles.Bar}>
      <div>Peterlits' Resume</div>
      <span style={{ flex: 1 }} />
      <Dropdown placeholder={(setState) => (
        <Button onClick={() => setState(s => s === 'hidden' ? 'opened' : 'hidden')}>
          { tag() === 'frontend' ? '前端' : '后端' }
        </Button>
      )}>
        <Dropdown.Item onClick={() => setTag('backend')}>
          后端
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTag('frontend')}>
          前端
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}