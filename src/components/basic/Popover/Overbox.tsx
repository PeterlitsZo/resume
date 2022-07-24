import { onMount, createSignal, Show } from 'solid-js';
import type { ParentComponent, Accessor, Setter, JSXElement } from 'solid-js';
import { computePosition, flip, shift, offset } from '@floating-ui/dom';
import classNames from 'classnames';

import State, { needShow, isActive } from './state';

import Move from './asserts/Move';
import X from './asserts/X';

import styles from './styles/Overbox.module.scss';
import A from '../A';

interface OverboxProps {
  span?: HTMLSpanElement;
  title?: JSXElement;
  link?: string;
  state: Accessor<State>;
  setState: Setter<State>;
  onpointerenter: (event: PointerEvent) => void;
  onpointerdown: (event: PointerEvent) => void;
  onpointerup: (event: PointerEvent) => void;
  onpointerleave: (event: PointerEvent) => void;
}

const Overbox: ParentComponent<OverboxProps> = (props) => {
  // `ref` to self.
  let ref = undefined as HTMLDivElement | undefined;

  // Self's position.
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

  // When self is mounted: We need clac self's position.
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

  // Deal with draging.
  const [cursorXOffset, setCursorXOffset] = createSignal(0);
  const [cursorYOffset, setCursorYOffset] = createSignal(0);
  const dragStartHandler = (event: PointerEvent) => {
    props.setState(State.pinAndDrag);
    setCursorXOffset(event.pageX - x());
    setCursorYOffset(event.pageY - y());
    document.addEventListener('pointermove', dragHandler);
    document.addEventListener('pointerup', dragEndHandler);
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
    document.removeEventListener('pointermove', dragHandler);
    document.removeEventListener('pointerup', dragEndHandler);
  };

  // Deal with closing.
  const closeHandler = (event: MouseEvent) => {
    props.setState(State.waitToClose);
    setTimeout(() => { props.setState(State.close) }, 50);
  }

  // If self is mounted firstly.
  const [firstMount, setFirstMount] = createSignal(true);
  onMount(async () => {
    await new Promise((resolve)  => {
      setTimeout(resolve, 50);
    });
    setFirstMount(false);
  });

  console.log(props.state());

  return (
    <div
      classList={{
        [styles.overbox]: true,
        [styles._show]: !firstMount() && needShow(props.state()),
        [styles._active]: isActive(props.state()),
      }}
      style={{ left: x() + 'px', top: y() + 'px' }}
      ref={ref}
      onpointerenter={props.onpointerenter}
      onpointerdown={props.onpointerdown}
      onpointerup={props.onpointerup}
      onpointerleave={props.onpointerleave}
    >
      <div class={classNames(styles.toolkit, styles.drag)} onpointerdown={dragStartHandler}>
        <Move />
        <Show when={props.title}>
          <span>{props.title}</span>
        </Show>
        <span class={styles.space} />
        <button
          class={styles.button}
          onclick={closeHandler}
          aria-label="Close button"
          type="button"
        >
          <X />
        </button>
      </div>
      <div class={styles.content}>{props.children}</div>
      <Show when={props.link}>
        <div class={styles.toolkitBottom}>
          <A href={props.link}>Click to visit.</A>
        </div>
      </Show>
    </div>
  );
}

const convertRemToPixels = (rem: number) => {
    const rootSize = getComputedStyle(document.documentElement).fontSize;
    return rem * parseFloat(rootSize);
}

export default Overbox;
