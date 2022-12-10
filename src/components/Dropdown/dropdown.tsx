import { ParentProps, JSX, createSignal, Show, Setter, Accessor, createContext, useContext } from "solid-js";

import styles from './dropdown.module.scss';

type DropdownState = 'hidden' | 'opened';

type DropdownContextValue = [Accessor<DropdownState>, Setter<DropdownState>];

interface DropdownProps {
  placeholder: (setState: Setter<DropdownState>) => JSX.Element;
}

const DropdownContext = createContext<DropdownContextValue>();

export const Dropdown = (props: ParentProps<DropdownProps> ) => {
  const [state, setState] = createSignal('hidden' as DropdownState);

  return (
    <DropdownContext.Provider value={[state, setState]}>
      <div class={styles.Dropdown}>
        {props.placeholder(setState)}
        <Show when={state() === 'opened'}>
          <ul class={styles.DropdownList}>
            {props.children}
          </ul>
        </Show>
      </div>
    </DropdownContext.Provider>
  )
}

interface DropdownItemProps {
  onClick?: (event: Event) => void;
}

Dropdown.Item = (props: ParentProps<DropdownItemProps>) => {
  const [state, setState] = useContext(DropdownContext)!;

  return (
    <li class={styles.DropdownListItem} onClick={(e) => {
      props.onClick && props.onClick(e);
      setState('hidden');
    }}>
      {props.children}
    </li>
  )
}