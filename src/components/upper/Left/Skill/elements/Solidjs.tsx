import Popover from '../../../../basic/Popover/Popover';
import SubHeader from '../../../../basic/SubHeader';

const Solidjs = () => (
  <Popover inSpan="SolidJS">
    <SubHeader>项目</SubHeader>
    <ul>
      <li>（所有者）本简历使用 solid.js 编写。</li>
      <li>（主要贡献者）lionchat，一个前后端使用 WebSocket 通信，且后端采用 Rust 编写的小项目。</li>
    </ul>
  </Popover>
);

export default Solidjs;
