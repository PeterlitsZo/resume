import type { Component } from 'solid-js';

import A from '../basic/A';

interface FooterProps {
    class?: string;
}

const Footer: Component<FooterProps> = (props: FooterProps) => {
  return (
    <div class={props.class}>
      请使用电脑访问 <A href="http://resume.peterlits.com">resume.peterlits.com</A>，以浏览在线版本，请将鼠标悬浮在高亮部分以获取更进一步信息。
    </div>
  );
}

export default Footer;
