import type { Accessor, Setter, Signal } from 'solid-js';

import State, { isPinned } from '../../state';

import handler, { TimeoutId } from './handler';

const MOUSE_LEAVE_DURATION = 100; // ms
const MOUSE_LEAVE_CLRER_DURATION = 300; // ms

/** Create a handler for event `onpointerleave`. */
const onpointerleave = (
  state: Accessor<State>,
  setState: Setter<State>,
  timeoutId: Accessor<TimeoutId>,
  setTimeoutId: Setter<TimeoutId>
) => handler({
  timeoutId: [timeoutId, setTimeoutId],
  preempte: (event: PointerEvent) => {
    if (event.pointerType === "mouse") {
      return true;
    } else {
      return false;
    }
  },
  ENTER_DURATION: MOUSE_LEAVE_DURATION,
  enter_callback: () => {
    console.debug('pointer leave')
    if (state() === State.close) {
      return;
    } else if (!isPinned(state())) {
      setState(State.waitToClose);
    } else if (state() != State.pinAndDrag) {
      setState(State.pin);
    }
  },
  LEAVE_DURATION: MOUSE_LEAVE_CLRER_DURATION,
  leave_callback: () => {
    if (state() === State.waitToClose) {
      setState(State.close);
    }
  }
})

export default onpointerleave;
