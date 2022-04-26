import Header from '../../basic/Header';
import A from '../../basic/A';
import SubHeader from '../../basic/SubHeader';
import SubSubHeader from '../../basic/SubSubHeader';
import Popover from '../../basic/Popover/Popover';

const Link = () => {
  return (
    <>
      <Header>链接</Header>
      <ul>
        <li>
          <Popover inA="GitHub://PeterlitsZo" href="https://github.com/PeterlitsZo">
            <SubHeader>链接</SubHeader>
            <ul>
              <li>
                <a href="https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3APeterlitsZo+archived%3Afalse+">
                  我的所有 PR
                </a>
              </li>
            </ul>
          </Popover>
        </li>
        <li><A href="https://stackoverflow.com/users/13031497/peterlits-zo">StackOverflow://Peterlits-Zo</A></li>
        <li>
          <Popover inA="dev.to://PeterlitsZo" href="https://dev.to/peterlitszo">
            <SubHeader>浏览量</SubHeader>
            <ul>
              <li>截至目前，浏览量已经达到了 610。</li>
            </ul>
            <SubHeader>内容</SubHeader>
            <SubSubHeader>安全</SubSubHeader>
            <ul>
              <li>涉及到用户认证（比如 HttpOnly Cookies、JWT、Session 等相关技术）。</li>
            </ul>
            <SubSubHeader>前端</SubSubHeader>
            <ul>
              <li>涉及到前端 mock 层。</li>
              <li>涉及到 React 框架。</li>
            </ul>
            <SubSubHeader>后端</SubSubHeader>
            <ul>
              <li>涉及到 Docker 网络。</li>
            </ul>
            <SubSubHeader>中间层</SubSubHeader>
            <ul>
              <li>涉及到 GraphQL。</li>
            </ul>
          </Popover>
        </li>
      </ul>
    </>
  );
}

export default Link;
