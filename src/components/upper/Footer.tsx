import type { Component } from 'solid-js';

import A from '../basic/A';

interface FooterProps {
    class?: string;
}

const Footer: Component<FooterProps> = (props: FooterProps) => {
  const { class: className } = props;

  return (
    <div class={className}>
      请使用电脑访问 <A href="http://resume.peterlits.com">resume.peterlits.com</A>，以浏览在线版本（包含更多信息，因服务器位置限制，国内可能暂时无法访问），将鼠标悬浮在高亮部分能获取到更深一步信息。
    </div>
  );
}

export default Footer;
