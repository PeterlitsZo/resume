import Popover from '../../../../basic/Popover/Popover';
import SubHeader from '../../../../basic/SubHeader';

const NetworkSecurity = () => (
  <Popover inSpan="网络安全">
    <SubHeader>经历</SubHeader>
    <ul>
      <li>对用户认证有基本的了解，包括 Basic、Cookie、Session、Token（JWT）。</li>
      <li>对 CSRF、XSS、SQL 注入攻击、中间人攻击有初步的了解。</li>
      <li>对散列函数（哈希函数）、对称加密、非对称加密（RSA、ECC）有初步的了解。</li>
      <li>对 HTTPS 有初步的了解。</li>
    </ul>
  </Popover>
);

export default NetworkSecurity;
