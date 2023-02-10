import SubHeader from '../../../basic/SubHeader';
import Tag from '../../../basic/Tag';

import Python from './elements/Python';
import CAndCpp from './elements/CAndCpp';
import JavaScriptAndTypeScript from './elements/JavaScriptAndTypeScript'
import Rust from './elements/Rust';
import Shell from './elements/Shell';
import Java from './elements/Java';

const Language = () => (
  <>
    <SubHeader>编程语言</SubHeader>
    <p>
      <Tag>熟练</Tag>
      Go, <Python />, <JavaScriptAndTypeScript />
    </p>
    <p>
      <Tag>熟悉</Tag>
      <CAndCpp />, <Rust />, <Java />, <Shell />, LaTeX
    </p>
  </>
)

export default Language;
