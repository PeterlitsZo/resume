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
      <li>一个嵌入式对象存储，基于 Meta（原 Facebook）的 Haystack 论文，并为其添加了一个 B+ 树索引。对于大量小文件的读取写入上，较直接使用 FS 或者使用数据库上性能上有优势。</li>
    </ul>
  </Popover>
);

export default Rust;
