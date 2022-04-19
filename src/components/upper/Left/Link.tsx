import Header from '../../basic/Header';
import A from '../../basic/A';
import SubHeader from '../../basic/SubHeader';
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
            <SubHeader>内容</SubHeader>
            <ul>
              <li>涉及到用户认证（比如 HttpOnly Cookies）。</li>
              <li>涉及到 Docker 网络。</li>
              <li>涉及到 GraphQL。</li>
              <li>涉及到前端 mock 层。</li>
            </ul>
          </Popover>
        </li>
      </ul>
    </>
  );
}

export default Link;
