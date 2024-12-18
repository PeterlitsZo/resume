import SubHeader from "../../../basic/SubHeader";
import Tag from "../../../basic/Tag";

import Git from "./elements/Git";
import Linux from "./elements/Linux";
import MySQLAndMariaDB from "./elements/MySQLAndMariaDB";
import Redis from "./elements/Redis";

const ToolAndPlatform = () => (
  <>
    <SubHeader>工具与平台</SubHeader>
    <p>
      <Tag>熟练</Tag>
      <MySQLAndMariaDB />, <Linux />
    </p>
    <p>
      <Tag>熟悉</Tag>
      {/* <Git />, */}
      <Redis />
    </p>
    <p>
      <Tag>了解</Tag>
      Nginx, Rabbit MQ, Mongo&shy;DB, Docker
    </p>
  </>
);

export default ToolAndPlatform;
