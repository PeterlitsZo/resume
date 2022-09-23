import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import UserStoryMap from './elements/UserStoryMap';
import Agile from './elements/Agile';

const SoftwareEngineering = () => (
  <>
    <SubHeader>软件工程</SubHeader>
    <p><Tag>熟悉</Tag>DDD</p>
    <p><Tag>了解</Tag><Agile />，<UserStoryMap />，瀑布流模式</p>
  </>
)

export default SoftwareEngineering;
