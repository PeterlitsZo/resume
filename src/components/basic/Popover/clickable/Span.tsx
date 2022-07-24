import type { ParentComponent } from 'solid-js';

import State, { isActive } from '../state';

import styles from './styles/Span.module.scss';

interface SpanProps {
  ref?: HTMLSpanElement;
  state: () => State;
  onpointerenter: (event: PointerEvent) => void;
  onpointerdown: (event: PointerEvent) => void;
  onpointerleave: (event: PointerEvent) => void;
  onpointerup: (event: PointerEvent) => void;
}

const Span: ParentComponent<SpanProps> = (props) => {
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
