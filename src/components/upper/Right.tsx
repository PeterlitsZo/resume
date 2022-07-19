import type { Component } from 'solid-js';

import A from '../basic/A';
import Part from '../basic/Part';
import Header from '../basic/Header';
import SubHeader from '../basic/SubHeader';

interface RightProps {
    class?: string;
}

const Right: Component<RightProps> = (props) => {
  const { class: className } = props;

  return (
    <Part class={className}>
      <Header>所获奖项</Header>
      <div style={{ 'column-count': 2, 'column-gap': '0.125rem' }}>
        <ul>
          <li>2021 - 铜奖 - ICPC 区域赛（南京）</li>
          <li>2021 - 铜奖 - ICPC 区域赛（济南）</li>
          <li>2021 - 银奖 - ICPC 区域赛（银川）</li>
        </ul>
      </div>
      <Header>实习经历</Header>
      <SubHeader>
        <SubHeader.Title>字节跳动</SubHeader.Title>
        <SubHeader.Helper>2022.7 - now</SubHeader.Helper>
      </SubHeader>
      <div style={{ 'column-count': 2, 'column-gap': '0.125rem' }}>
        <ul>
          <li>目前在使用 Go 语言，为边缘系统的运维自动化做工作。</li>
          <li>工作积累：累计 3 个 gitlab MR、约 10+ 个 commit，设计到 feature、bugfix、重构和文档更新。</li>
        </ul>
      </div>
      <Header>项目</Header>
      <SubHeader>
        <SubHeader.Title>ACM Homepage</SubHeader.Title>
        <SubHeader.Helper>2021.11 - now</SubHeader.Helper>
      </SubHeader>
      <p>身份：主要开发者，敏捷教练，产品负责人</p>
      <p>
        网址：
        <A href="https://www.github.com/PeterlitsZo/ACMHomepage">github.com/PeterlitsZo/ACMHomepage</A>
      </p>
      <div style={{ 'column-count': 2, 'column-gap': '0.125rem' }}>
        <ul>
          <li>一个全栈项目。已有软件著作权。后端基于 Node.js / Nest.js + MariaDB，并使用 RabbitMQ 和爬虫微服务通信，前端基于 React / Next.js + TypeScript。目前代码行数为 6k+（包含测试），200+ 个提交。</li>
          <li>前后端分离。使用 GraphQL 通信。在开发时能够使用 MSW.js 框架 mock 前端请求。</li>
          <li>作为我校 ACM 集训队的主页，目前完成了用户认证，新闻浏览，爬取训练数据等一系列功能。且支持 Docker Compose 一键部署。</li>
          <li>使用敏捷开发模式和另外两位开发者协同开发。使用 git 进行团队协作，利用 GitHub 的 PR 机制来进行贡献。</li>
          <li>单元测试覆盖率高；且安全性好，使用 HttpOnly cookie，和 JWT 用户认证，后端使用 bcrypt 存储密码。</li>
        </ul>
      </div>
      <SubHeader>
        <SubHeader.Title>East</SubHeader.Title>
        <SubHeader.Helper>2020.04 - 2020.05</SubHeader.Helper>
      </SubHeader>
      <p>身份：所有者</p>
      <p>
        网址：
        <A href="https://www.github.com/PeterlitsZo/East">github.com/PeterlitsZo/East</A>
      </p>
      <div style={{ 'column-count': 2, 'column-gap': '0.125rem' }}>
        <ul>
          <li>信息检索工具。使用 Go 语言。</li>
          <li>用户友好。使用自主设计的数据结构，和 Lexer（从用户输入的命令字符串到 token stream），和利用 goyacc 创建的 LALR 编译器（从 token stream 到 AST），将用户输入的字符串解析为程序能够处理的语法树，故能支持布尔运算。</li>
          <li>完成了 TF-IDF 功能。</li>
          <li>包含单元测试。</li>
        </ul>
      </div>
      <SubHeader>
        <SubHeader.Title>更多项目</SubHeader.Title>
      </SubHeader>
      <p>
        请访问我的 Github 主页：<A href="https://www.github.com/PeterlitsZo">Github://PeterlitsZo</A>
      </p>
      <Header>开源贡献</Header>
      <div style={{ 'column-count': 2, 'column-gap': '0.125rem' }}>
        <ul>
          <li><A href="https://github.com/oi-wiki/oi-wiki/commits?author=PeterlitsZo">OI-wiki</A>，一个面向竞赛者的算法网站。贡献了约 20 个 commit，涉及到数论、字符串、图论等。</li>
          <li><A href="https://github.com/system-ui/theme-ui/commits?author=PeterlitsZo">Theme-UI</A>，一个 CSS-in-JS 库，修复了文档，并且更新了其中一个组件。</li>
          <li>emotion，一个 CSS-in-JS 库，发现 bug，并提交了单元测试。</li>
          <li>python-json-pointer，为 JSON Pointer 实现了返回解析列表的功能。</li>
        </ul>
      </div>
    </Part>
  );
}

export default Right;
