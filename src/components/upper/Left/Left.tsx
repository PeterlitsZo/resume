import type { Component } from 'solid-js';

import Part from '../../basic/Part';

import CommonInfo from './CommonInfo';
import Edu from './Edu';
import Link from './Link';
import Skill from './Skill/Skill';

interface LeftProps {
    class?: string;
}

const Left: Component<LeftProps> = (props) => {
  const { class: className } = props;

  return (
    <Part class={className}>
      <CommonInfo />
      <Edu />
      <Link />
      <Skill />
    </Part>
  );
}

export default Left;
