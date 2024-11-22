import Popover from "../../../../basic/Popover";
import SubHeader from "../../../../basic/SubHeader";

const Python = () => (
  <Popover inSpan="Python">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《流畅的 Python》。</li>
      <li>《Python Cookbook》。</li>
      <li>《Python 学习手册》。</li>
    </ul>
    <SubHeader>经历</SubHeader>
    <ul>
      <li>
        在校期间，使用 Python 编写大多数一次性工具、网络爬虫和编译原理习题。
      </li>
      <li>
        工作期间也使用 Python 来编写部分简单的脚本。了解基本的 Python 语法。
      </li>
    </ul>
    <SubHeader>绩点</SubHeader>
    <ul>
      <li>3.9。</li>
    </ul>
  </Popover>
);

export default Python;
