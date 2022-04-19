import Popover from '../../../../basic/Popover/Popover';
import SubHeader from '../../../../basic/SubHeader';
import A from '../../../../basic/A';

const Compiler = () => (
  <Popover inSpan="编译原理">
    <SubHeader>经历</SubHeader>
    <ul>
      <li>项目 East 使用编译原理来解析布尔运算，基于 Go 语言，和相关库 goyacc。</li>
      <li>使用 Python（未使用相关库）来解析 HTTP 文档，构成文档树。</li>
      <li>使用过 C++ 和相关库（yacc + lexer）来解析用户命令。<A href="https://github.com/PeterlitsZo/MessageBookCli/blob/master/src/help/HELP.cpp">点击查看实现文档。</A></li>
    </ul>
    <SubHeader>绩点</SubHeader>
    <ul><li>4.0。</li></ul>
  </Popover>
);

export default Compiler;
