import type { Component } from 'solid-js';

import State, { isActive } from '../state';

import styles from './styles/Span.module.scss';

interface SpanProps {
  ref?: HTMLSpanElement;
  state: () => State;
  onmouseenter: () => void;
  onmouseleave: () => void;
}

const Span: Component<SpanProps> = (props) => {
  return (
    <span classList={{
      [styles.span]: true,
      [styles._active]: isActive(props.state()),
    }} {...props}>
      {props.children}
    </span>
  );
}

export default Span;
