import type { Accessor, Setter, Signal } from 'solid-js';
import State, { isPinned } from '../../state';
import handler, { TimeoutId } from './handler';

const MOUSE_ENTER_DURATION = 200; // ms

/** Create a handler for event `onpointerenter`. */
const onpointerdown = (
  state: Accessor<State>,
  setState: Setter<State>,
  timeoutId: Accessor<TimeoutId>,
  setTimeoutId: Setter<TimeoutId>
) => handler({
  timeoutId: [timeoutId, setTimeoutId],
})

export default onpointerdown;
