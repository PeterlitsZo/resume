import type { Signal } from 'solid-js';

type TimeoutId = number | undefined;

interface HandlerArgument {
  timeoutId: Signal<TimeoutId>;
  preempte?: (event: PointerEvent) => boolean;
  callback?: (event: PointerEvent) => void;
  ENTER_DURATION?: number;
  enter_callback?: (event: PointerEvent) => void;
  LEAVE_DURATION?: number;
  leave_callback?: (event: PointerEvent) => void;
}

const handler = (argument: HandlerArgument) => (event: PointerEvent) => {
  const {
    timeoutId: [timeoutId, setTimeoutId],
    preempte = () => true,
    callback = null,
    ENTER_DURATION = 0,
    enter_callback = null,
    LEAVE_DURATION = 0,
    leave_callback = null,
  } = argument;

  // If there is already an existing timer and we do not want to preempte...
  // Then the task will be failed.
  if (timeoutId() !== undefined && !preempte(event)) {
    return;
  }

  if (callback !== null) {
    callback(event);
  }
  // Clear the existing timer.
  clearTimeout(timeoutId());
  // Create a new timer (that will change state later).
  setTimeoutId(setTimeout(() => {
    // Invoke to finish its work
    if (enter_callback !== null) {
      enter_callback(event);
    }
    // If the timer finish its work, clear it self, or create a new timer to
    // invoke `leave_callback`.
    clearTimeout(timeoutId());
    if (leave_callback === null) {
      setTimeoutId(undefined);
      return;
    }
    setTimeoutId(setTimeout(() => {
      leave_callback(event);
      // Clear the existing timer for clearing.
      clearTimeout(timeoutId());
      setTimeoutId(undefined);
    }, LEAVE_DURATION));
  }, ENTER_DURATION));
}

export default handler;

export type { TimeoutId };