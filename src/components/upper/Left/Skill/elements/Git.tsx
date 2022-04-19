import Popover from '../../../../basic/Popover/Popover';
import SubHeader from '../../../../basic/SubHeader';

const Git = () => (
  <Popover inSpan="git">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《Git 版本控制》。</li>
    </ul>
    <SubHeader>经历</SubHeader>
    <ul>
      <li>所有项目均使用 git 来进行版本控制（如 ACM Homepage、East、lionchat 等）。</li>
      <li>GitHub 上，截至目前已经提交过 1k+ 的提交。</li>
      <li>熟练使用 add、commit、pull、fetch、push、merge、rebase 等命令。</li>
      <li>较熟练使用 reset 等命令。</li>
      <li>使用过 submodule、revert 等命令。</li>
      <li>对 GitHub 的 PR、CI/CD 有着粗浅的认知。</li>
    </ul>
  </Popover>
);

export default Git;
