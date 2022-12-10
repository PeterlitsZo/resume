import type { Component, JSX, PropsWithChildren } from "solid-js";
import { splitProps, createEffect, createSignal } from "solid-js";

import Link from './asserts/Link';

import styles from './styles/A.module.scss';

interface baseClassProps {
    classList?: { [key:string]: boolean | undefined };
    class?: string;
    className?: string;
}

const mergeClassProps = <T extends baseClassProps>(
  props: PropsWithChildren<T>,
  selfClassList: { [ key: string ]: boolean | undefined }
) => {
  const [classProps, others] = splitProps(
    props,
    ['classList', 'class', 'className']
  );

  const classList: () => typeof selfClassList = () => {
    const classList = {
      ...selfClassList,
      ...classProps.classList
    } as typeof selfClassList;
    if ('class' in classProps) classList[classProps.class!] = true;
    if ('className' in classProps) classList[classProps.className!] = true;
    return classList;
  };

  return [classList, others] as [typeof classList, typeof others];
};

interface AProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement>, baseClassProps { };

const A: Component<AProps> = (props) => {
  const [classList, others_tmp] = mergeClassProps(props, { [styles.a]: true });

  const [children, others] = splitProps(others_tmp, ['children']);

  return (
      <a classList={classList()} {...others}>
          {children.children}
          &thinsp;
          <Link />
      </a>
  )
}

export default A;
