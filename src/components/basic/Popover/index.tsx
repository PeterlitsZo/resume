import { Portal, Show } from 'solid-js/web';
import { createSignal, mergeProps, splitProps } from 'solid-js';
import type { ParentComponent, JSXElement, Accessor, Setter } from 'solid-js';

import State from './state';
import { onpointerenter, onpointerleave, onpointerdown, onpointerup } from './clickable/utils';

import Overbox from './Overbox';
import Span from './clickable/Span';
import A from './clickable/A';

interface PopoverPropsBase { }

interface PopoverPropsWithSpan extends PopoverPropsBase {
    inSpan: JSXElement;
}

interface PopoverPropsWithA extends PopoverPropsBase {
    inA: JSXElement;
    href: string;
}

interface PopoverPropsSignal {
    state: Accessor<State>;
    setState: Setter<State>;
    onpointerenter: (event: PointerEvent) => void;
    onpointerleave: (event: PointerEvent) => void;
    onpointerdown: (event: PointerEvent) => void;
    onpointerup: (event: PointerEvent) => void;
}

type PopoverProps = PopoverPropsWithA | PopoverPropsWithSpan;

const Popover: ParentComponent<PopoverProps> = (props) => {
  const [state, setState] = createSignal(State.close);
  const [timeoutId, setTimeoutId] = createSignal(undefined as number | undefined);

  const pointerEnterHandler = onpointerenter(state, setState, timeoutId, setTimeoutId);
  const pointerDownHandler = onpointerdown(state, setState, timeoutId, setTimeoutId);
  const pointerLeaveHandler = onpointerleave(state, setState, timeoutId, setTimeoutId);
  const pointerUpHandler = onpointerup(state, setState, timeoutId, setTimeoutId);

  const mergedProps = mergeProps({
    state,
    setState,
    onpointerenter: pointerEnterHandler,
    onpointerdown: pointerDownHandler,
    onpointerleave: pointerLeaveHandler,
    onpointerup: pointerUpHandler,
  }, props);

  if ('inSpan' in mergedProps) {
    return <PopoverWithSpan {...mergedProps} />
  } else {
    return <PopoverWithA {...mergedProps} />
  }
}

const PopoverWithSpan: ParentComponent<PopoverPropsWithSpan & PopoverPropsSignal> = (props) => {
  const [pointerEvent, _propsWithoutMouseEvent]
    = splitProps(props, ['onpointerenter', 'onpointerleave', 'onpointerdown', 'onpointerup']);
  let ref = undefined as HTMLSpanElement | undefined;

  return (
    <>
      <Span
        ref={ref}
        state={props.state}
        {...pointerEvent}
      >
        { props.inSpan }
      </Span>
      <Show when={props.state() !== State.close}>
        <Portal>
          <Overbox span={ref} {...props} title={props.inSpan}>
            {props.children}
          </Overbox>
        </Portal>
      </Show>
    </>
  )
}

const PopoverWithA: ParentComponent<PopoverPropsWithA & PopoverPropsSignal> = (props) => {
  const [pointerEvent, _propsWithoutMouseEvent]
    = splitProps(props, ['onpointerenter', 'onpointerleave', 'onpointerdown', 'onpointerup']);
  let ref = undefined as HTMLAnchorElement | undefined;

  return (
    <>
      <A
        href={props.href}
        ref={ref}
        state={props.state}
        {...pointerEvent}
      >
        { props.inA }
      </A>
      <Show when={props.state() !== State.close}>
        <Portal>
          <Overbox span={ref} {...props} title={props.inA} link={props.href}>
            {props.children}
          </Overbox>
        </Portal>
      </Show>
    </>
  )
}

export default Popover;
