import Header from '../../basic/Header';

const CommonInfo = () => {
  return (
    <>
      <Header>基本信息</Header>
      <ul>
        <li>性别：男</li>
        <li>出生日期：2001-08-03</li>
        <li>个人评价：
          <ul>
            <li>对技术拥有广泛、强烈且持续的兴趣，深度挖掘底层原理。</li>
            <li>学习能力较强，自驱式学习。</li>
            <li>工作负责、高效。</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default CommonInfo;
