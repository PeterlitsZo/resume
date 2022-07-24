import Popover from '../../../../basic/Popover';
import SubHeader from '../../../../basic/SubHeader';

const Rust = () => (
  <Popover inSpan="Rust">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《Rust 权威指南》。</li>
      <li>《Rust 程序设计》。</li>
    </ul>
    <SubHeader>项目</SubHeader>
    <ul>
      <li>网络留言板后端服务器（RESTful API）。</li>
      <li>网络聊天后端服务器（WebSocket API）。</li>
    </ul>
  </Popover>
);

export default Rust;
