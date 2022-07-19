import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import OS from './elements/OS';
import Compiler from './elements/Compiler';
import DB from './elements/DB';
import Network from './elements/Network';
import DataStruct from './elements/DataStruct';
import Algorithm from './elements/Algorithm';
import NetworkSecurity from './elements/NetworkSecurity';
import ComputerGraphics from './elements/ComputerGraphics';
import DesignPattern from './elements/DesignPattern';
import ML from './elements/ML';
import Professionalism from './elements/Professionalism';

const Basic = () => (
  <>
    <SubHeader>基本知识</SubHeader>
    <p>
      <Tag>熟悉</Tag>
      <OS />，<Compiler />，<DB />，<Network />，<DataStruct />，<Algorithm />
    </p>
    <p>
      <Tag>了解</Tag>
      <NetworkSecurity />，<ComputerGraphics />，<DesignPattern />，<ML />，<Professionalism />
    </p>
  </>
)

export default Basic;
