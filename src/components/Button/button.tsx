import type { ParentComponent } from "solid-js";

import styles from './button.module.scss';

interface ButtonProps {
  onClick?: (event: MouseEvent) => void;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button class={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}