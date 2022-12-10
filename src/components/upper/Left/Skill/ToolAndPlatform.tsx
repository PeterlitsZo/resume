import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import Git from './elements/Git';
import Linux from './elements/Linux';
import MySQLAndMariaDB from './elements/MySQLAndMariaDB';
import Redis from './elements/Redis';

const ToolAndPlatform = () => (
  <>
    <SubHeader>工具与平台</SubHeader>
    <p>
      <Tag>熟练</Tag>
      <Git />, Docker, <Linux />
    </p>
    <p>
      <Tag>掌握</Tag>
      Mongo-DB
    </p>
    <p>
      <Tag>熟悉</Tag>
      <MySQLAndMariaDB />
    </p>
    <p>
      <Tag>了解</Tag>
      nginx, <Redis />, Rabbit MQ
    </p>
  </>
)

export default ToolAndPlatform;
