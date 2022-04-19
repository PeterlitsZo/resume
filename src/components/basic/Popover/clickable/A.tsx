import { Component, splitProps, createEffect, createSignal } from 'solid-js';

import State, { isActive } from '../state';

import ABase from '../../A';

import styles from './styles/A.module.scss';

interface AProps {
  ref?: HTMLAnchorElement;
  href?: string;
  state: () => State;
  onmouseenter: () => void;
  onmouseleave: () => void;
}

const A: Component<AProps> = (props) => {
  const [state, others] = splitProps(props, ['state']);
  const classList = () => {
    return {
      [styles.a]: true,
      [styles._active]: isActive(state.state()),
    }
  };

  return (
    <ABase classList={classList()} {...others} />
  );
}

export default A;
