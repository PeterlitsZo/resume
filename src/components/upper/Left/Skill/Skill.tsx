import Header from '../../../basic/Header';

import Language from './Language';
import Framework from './Framework';
import ToolAndPlatform from './ToolAndPlatform';
import SoftwareEngineering from './SoftwareEngineering';
import Basic from './Basic';
import { useTag } from '../../../../contexts/tag';

const Skill = () => {
  const [tag] = useTag();

  return (
    <>
      <Header>技能</Header>
      {tag() === 'backend' && <Language />}
      <Framework />
      <ToolAndPlatform />
      <SoftwareEngineering />
      <Basic />
    </>
  )
};

export default Skill;
