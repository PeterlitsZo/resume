import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import React from './elements/React';
import Django from './elements/Django';
import Solidjs from './elements/Solidjs';
import { useTag } from '../../../../contexts/tag';

const Framework = () => {
  const [tag] = useTag();

  return (
    <>
      <SubHeader>框架</SubHeader>
      { tag() === 'frontend' && (
        <p>
          <Tag>掌握</Tag>
          <React />
        </p>
      ) }
      <p>
        <Tag>熟悉</Tag>
        <Django />
        { tag() === 'frontend' && <>, Vue</> }
      </p>
      <p>
        <Tag>了解</Tag>
        { tag() === 'frontend' && <><Solidjs/>, </> }
        Express
        { tag() === 'frontend' && <>, Next.js</> }
        , Nest.js
        { tag() === 'backend' && <>, gin</>}
      </p>
    </>
  );
}

export default Framework;
