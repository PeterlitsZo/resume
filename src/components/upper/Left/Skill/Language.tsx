import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import Python from './elements/Python';
import CAndCpp from './elements/CAndCpp';
import JavaScriptAndTypeScript from './elements/JavaScriptAndTypeScript'
import Rust from './elements/Rust';
import Java from './elements/Java';

const Language = () => (
  <>
    <SubHeader>编程语言</SubHeader>
    <p>
      <Tag>5k - 15k</Tag>
      <Python />，<CAndCpp />，<wbr /><JavaScriptAndTypeScript />，LaTeX
    </p>
    <p>
      <Tag>1k - 5k</Tag>
      <Rust />，Shell，<Java />
    </p>
  </>
)

export default Language;
