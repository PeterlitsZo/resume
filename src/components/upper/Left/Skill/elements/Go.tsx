import Popover from '../../../../basic/Popover';
import SubHeader from '../../../../basic/SubHeader';

const Go = () => (
  <Popover inSpan="Go">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《Go 程序设计语言》。</li>
    </ul>
    <SubHeader>经历</SubHeader>
    <ul>
      <li>22 - 23 年在抖音（原字节跳动）实习期间，使用 Go 完成主要任务，详见实习经历。</li>
      <li>23 - 24 年在滴滴工作期间，使用 Go 完成主要任务，详见工作经历。</li>
    </ul>
  </Popover>
);

export default Go;
