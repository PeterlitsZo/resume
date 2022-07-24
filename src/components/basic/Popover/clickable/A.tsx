import { ParentComponent, splitProps } from 'solid-js';

import State, { isActive } from '../state';

import ABase from '../../A';

import styles from './styles/A.module.scss';

interface AProps {
  ref?: HTMLAnchorElement;
  href?: string;
  state: () => State;
  onpointerenter: (event: PointerEvent) => void;
  onpointerdown: (event: PointerEvent) => void;
  onpointerleave: (event: PointerEvent) => void;
  onpointerup: (event: PointerEvent) => void;
}

const A: ParentComponent<AProps> = (props) => {
  const [state, others] = splitProps(props, ['state']);
  const classList = () => {
    return {
      [styles.a]: true,
      [styles._active]: isActive(state.state()),
    }
  };

  return (
    <ABase
      classList={classList()}
      {...others}
      onclick={e => e.preventDefault()}
    />
  );
}

export default A;
