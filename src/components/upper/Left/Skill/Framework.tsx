import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import React from './elements/React';
import Django from './elements/Django';
import Solidjs from './elements/Solidjs';

const Framework = () => (
  <>
    <SubHeader>框架</SubHeader>
    <p><Tag>熟悉</Tag><React /></p>
    <p><Tag>一般</Tag><Django />，Vue</p>
    <p><Tag>了解</Tag><Solidjs />，Express，Next.js</p>
  </>
)

export default Framework;
