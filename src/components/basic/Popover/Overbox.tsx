import { onMount, createSignal, Show } from 'solid-js';
import type { Component, Accessor, Setter, JSXElement } from 'solid-js';
import { computePosition, flip, shift, offset } from '@floating-ui/dom';
import classNames from 'classnames';

import State, { needShow, isActive } from './state';

import Move from './asserts/Move';
import X from './asserts/X';

import styles from './styles/Overbox.module.scss';

interface OverboxProps {
  span?: HTMLSpanElement;
  title?: JSXElement;
  state: Accessor<State>;
  setState: Setter<State>;
  onmouseleave: () => void;
  onmouseenter: () => void;
}

const Overbox: Component<OverboxProps> = (props) => {
  let ref = undefined as HTMLDivElement | undefined;
  const [x, setX] = createSignal(0);
  const [y, setY] = createSignal(0);
  const setGoodX = (ref: HTMLDivElement, x: number) => {
    const result = Math.max(0, Math.min(document.body.clientWidth - ref.offsetWidth, x));
    setX(result);
  }
  const setGoodY = (ref: HTMLDivElement, y: number) => {
    const result = Math.max(0, Math.min(document.body.clientHeight - ref.offsetHeight, y));
    setY(result);
  }

  onMount(async () => {
    if (!props.span || !ref) return;
    const {x, y} = await computePosition(props.span, ref, {
      placement: "top",
      middleware: [
        offset(convertRemToPixels(0.125)),
        flip(),
        shift({ padding: convertRemToPixels(1),
      })]
    });
    setX(x);
    setY(y);
  });

  const [cursorXOffset, setCursorXOffset] = createSignal(0);
  const [cursorYOffset, setCursorYOffset] = createSignal(0);
  const dragStartHandler = (event: MouseEvent) => {
    props.setState(State.pinAndDrag);
    setCursorXOffset(event.pageX - x());
    setCursorYOffset(event.pageY - y());
    document.addEventListener('mousemove', dragHandler);
    document.addEventListener('mouseup', dragEndHandler);
  };
  const dragHandler = (event: MouseEvent) => {
    if (!ref) return;
    if (event.buttons === 1) {
      setGoodX(ref, event.pageX - cursorXOffset());
      setGoodY(ref, event.pageY - cursorYOffset());
    }
  };
  const dragEndHandler = (event: MouseEvent) => {
    if (!ref) return;
    setGoodX(ref, event.pageX - cursorXOffset());
    setGoodY(ref, event.pageY - cursorYOffset());
    props.setState(State.pinAndHover);
    document.removeEventListener('mousemove', dragHandler);
    document.removeEventListener('mouseup', dragEndHandler);
  };

  const [firstMount, setFirstMount] = createSignal(true);
  onMount(async () => {
    await new Promise((resolve)  => {
      setTimeout(resolve, 50);
    });
    setFirstMount(false);
  });

  return (
    <div
      classList={{
        [styles.overbox]: true,
        [styles._show]: !firstMount() && needShow(props.state()),
        [styles._active]: isActive(props.state()),
      }}
      style={{ left: x() + 'px', top: y() + 'px' }}
      ref={ref}
      onmouseenter={props.onmouseenter}
      onmouseleave={props.onmouseleave}
    >
      <div class={classNames(styles.toolkit, styles.drag)} onmousedown={dragStartHandler}>
        <Move />
        <Show when={props.title}>
          <span>{props.title}</span>
        </Show>
        <span class={styles.space} />
        <button class={styles.button} onclick={() => props.setState(State.close)}>
          <X />
        </button>
      </div>
      <div class={styles.content}>{props.children}</div>
    </div>
  );
}

const convertRemToPixels = (rem: number) => {
    const rootSize = getComputedStyle(document.documentElement).fontSize;
    return rem * parseFloat(rootSize);
}

export default Overbox;
