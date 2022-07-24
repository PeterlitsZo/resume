import type { Accessor, Setter, Signal } from 'solid-js';

import State, { isPinned } from '../../state';

import handler, { TimeoutId } from './handler';

/** Create a handler for event `onpointerleave`. */
const onpointerleave = (
  state: Accessor<State>,
  setState: Setter<State>,
  timeoutId: Accessor<TimeoutId>,
  setTimeoutId: Setter<TimeoutId>
) => handler({
  timeoutId: [timeoutId, setTimeoutId],
  enter_callback: (event) => {
    console.debug('pointer up', state())
    if (event.pointerType === "mouse") {
      return;
    }
    if (state() === State.waitToClose) {
      return;
    } else if (!isPinned(state())) {
      setState(State.open);
    } else if (state() != State.pinAndDrag) {
      setState(State.pinAndHover);
    }
  }
})

export default onpointerleave;
