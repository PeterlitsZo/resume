import State, { isPinned } from '../../state';

const onmouseleave = (state: () => State, setState: (state: State) => void, timeoutId: () => number | undefined, setTimeoutId: (timeoutId?: number) => void) => () => {
  clearTimeout(timeoutId());
  setTimeoutId(setTimeout(() => {
    if (state() === State.close) {
      return;
    } if (!isPinned(state())) {
      setState(State.waitToClose);
    } else if (state() != State.pinAndDrag) {
      setState(State.pin);
    }
    clearTimeout(timeoutId());
    setTimeoutId(setTimeout(() => {
      if (state() === State.waitToClose) {
        setState(State.close);
      } else {
        clearTimeout(timeoutId());
      }
    }, 300));
  }, 100));
}

export default onmouseleave;
