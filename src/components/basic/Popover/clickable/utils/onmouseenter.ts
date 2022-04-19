import State, { isPinned } from '../../state';

const onmouseenter = (state: () => State, setState: (state: State) => void, timeoutId: () => number | undefined, setTimeoutId: (timeoutId?: number) => void) => () => {
  clearTimeout(timeoutId());
  setTimeoutId(setTimeout(() => {
    if (!isPinned(state())) {
      setState(State.open);
    } else if (state() != State.pinAndDrag) {
      setState(State.pinAndHover);
    }
    clearTimeout(timeoutId());
    setTimeoutId(undefined);
  }, 200));
}

export default onmouseenter;
