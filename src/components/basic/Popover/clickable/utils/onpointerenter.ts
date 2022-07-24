import type { Accessor, Setter, Signal } from 'solid-js';
import State, { isPinned } from '../../state';
import handler, { TimeoutId } from './handler';

const MOUSE_ENTER_DURATION = 200; // ms

/** Create a handler for event `onpointerenter`. */
const onpointerenter = (
  state: Accessor<State>,
  setState: Setter<State>,
  timeoutId: Accessor<TimeoutId>,
  setTimeoutId: Setter<TimeoutId>
) => handler({
  timeoutId: [timeoutId, setTimeoutId],
  ENTER_DURATION: MOUSE_ENTER_DURATION,
  enter_callback: () => {
    console.debug('pointer enter')
    if (!isPinned(state())) {
      setState(State.open);
    } else if (state() != State.pinAndDrag) {
      setState(State.pinAndHover);
    }
  }
})

export default onpointerenter;
