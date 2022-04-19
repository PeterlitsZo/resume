import { Portal, Show } from 'solid-js/web';
import { createSignal, mergeProps, splitProps } from 'solid-js';
import type { Component, JSXElement, Accessor, Setter } from 'solid-js';

import State from './state';
import { onmouseenter, onmouseleave } from './clickable/utils';

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
    onmouseenter: () => void;
    onmouseleave: () => void;
}

type PopoverProps = PopoverPropsWithA | PopoverPropsWithSpan;

const Popover: Component<PopoverProps> = (props) => {
  const [state, setState] = createSignal(State.close);
  const [timeoutId, setTimeoutId] = createSignal(undefined as number | undefined);

  const mouseEnterHandler = onmouseenter(state, setState, timeoutId, setTimeoutId);
  const mouseLeaveHandler = onmouseleave(state, setState, timeoutId, setTimeoutId);

  const mergedProps = mergeProps({
    state,
    setState,
    onmouseleave: mouseLeaveHandler,
    onmouseenter: mouseEnterHandler
  }, props);

  if ('inSpan' in mergedProps) {
    return <PopoverWithSpan {...mergedProps} />
  } else {
    return <PopoverWithA {...mergedProps} />
  }
}

const PopoverWithSpan: Component<PopoverPropsWithSpan & PopoverPropsSignal> = (props) => {
  const [mouseEvent, _propsWithoutMouseEvent] = splitProps(props, ['onmouseenter', 'onmouseleave']);
  let ref = undefined as HTMLSpanElement | undefined;

  return (
    <>
      <Span
        ref={ref}
        state={props.state}
        {...mouseEvent}
      >{ props.inSpan }</Span>
      <Show when={props.state() !== State.close}>
        <Portal>
          <Overbox span={ref} {...props} title={props.inSpan}>{props.children}</Overbox>
        </Portal>
      </Show>
    </>
  )
}

const PopoverWithA: Component<PopoverPropsWithA & PopoverPropsSignal> = (props) => {
  const [mouseEvent, _propsWithoutMouseEvent] = splitProps(props, ['onmouseenter', 'onmouseleave']);
  let ref = undefined as HTMLAnchorElement | undefined;

  return (
    <>
      <A href={props.href} ref={ref} state={props.state} {...mouseEvent}>{ props.inA }</A>
      <Show when={props.state() !== State.close}>
        <Portal>
          <Overbox span={ref} {...props} title={props.inA}>{props.children}</Overbox>
        </Portal>
      </Show>
    </>
  )
}

export default Popover;
