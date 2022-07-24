import Popover from '../../../../basic/Popover';
import SubHeader from '../../../../basic/SubHeader';

const Django = () => (
  <Popover inSpan="Django">
    <SubHeader>项目</SubHeader>
    <ul>
      <li>大一时，使用 Django 完成了一个简单的留言板功能。使用 Django 抽象好的 ORM 对 SQLite 数据库进行交互。使用 Django 的模板在服务端渲染 HTML，前后端未分离。现在已经没有在线运行了。</li>
    </ul>
  </Popover>
);

export default Django;
