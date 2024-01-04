import type { Component } from 'solid-js';

import A from '../basic/A';
import Part from '../basic/Part';
import Header from '../basic/Header';
import SubHeader from '../basic/SubHeader';
import SubSubHeader from '../basic/SubSubHeader';
import { useTag } from '../../contexts/tag';

interface RightProps {
    class?: string;
}

const Right: Component<RightProps> = (props) => {
  const [tag] = useTag();

  const { class: className } = props;

  return (
    <Part class={className}>
      <Header>工作经历</Header>
      <SubHeader>
        <SubHeader.Title>滴滴</SubHeader.Title>
        <SubHeader.Helper>2023.7 - now</SubHeader.Helper>
      </SubHeader>
      <SubSubHeader>增长技术 / 营销技术 / 业务线增长</SubSubHeader>
      <ul style={{ 'column-count': 2, 'column-gap': '0.75rem' }}>
        <li>在公司内部担任软件工程师，负责使用 Go 语言维护和开发营销活动相关的需求。</li>
        <li>截至目前，共参与过 9 个需求，完成 436 个提交和 14k 行的代码净添加，包括“滴盟”、“自来水”和“揽客宝”相关需求的开发。</li>
        <li>工作期间，积极学习，涉猎学习过操作系统、数据库底层原理（并在内部分享过 SimpleSQLite 实现），数据存储与处理和一些分布式存储。</li>
      </ul>
      <Header>实习经历</Header>
      <SubHeader>
        <SubHeader.Title>字节跳动</SubHeader.Title>
        <SubHeader.Helper>2022.7 - 2023.1</SubHeader.Helper>
      </SubHeader>
      <SubSubHeader>Leao | 边缘系统的可观测平台</SubSubHeader>
      <ul style={{ 'column-count': 2, 'column-gap': '0.75rem' }}>
        <li>在公司内部担任软件工程师实习生，负责使用 Go 语言维护和开发边缘云系统中提供可观测性的平台（Leao 平台）。</li>
        <li>在此期间，累计了 40+ 个 GitLab MR，500+ 个提交，实现了 LeaoMeta 的 List-Watch 功能、Namespace 资源的支持、独立开发了 LeaoKeeper 和 LeaoAdapter 等。</li>
        <li>工作期间，积极学习，涉猎方面广泛，熟悉了 MongoDB，微服务架构，RESTful API 涉及，DDD 领域驱动开发，React 开发等开发技术，并在开发过程中积累了大量实践经验。</li>
        <li>实习结束后，我对软件工程师这一职业充满热情，希望在今后的工作中继续深入学习和提升。</li>
      </ul>
      <Header>所获奖项</Header>
      <ul style={{ 'column-count': 2, 'column-gap': '0.75rem' }}>
        <li>2021 - 铜奖 - ICPC 区域赛（南京）</li>
        <li>2021 - 铜奖 - ICPC 区域赛（济南）</li>
        <li>2021 - 银奖 - ICPC 区域赛（银川）</li>
      </ul>
      <Header>项目</Header>
      <SubHeader>
        <SubHeader.Title>ACM Homepage</SubHeader.Title>
        <SubHeader.Helper>2021.11 - 2022.2</SubHeader.Helper>
      </SubHeader>
      <p>身份：主要开发者，敏捷教练，产品负责人</p>
      <p>
        网址：
        <A href="https://www.github.com/PeterlitsZo/ACMHomepage">github.com/PeterlitsZo/ACMHomepage</A>
      </p>
      <ul style={{ 'column-count': 2, 'column-gap': '0.75rem' }}>
        <li>一个具有软件著作权的全栈项目。包含前后端代码 6k+ 行（含测试），200+ 个提交。</li>
        <li>采用前后端分离的设计，使用 GraphQL 通信，并使用 MSW.js 框架 mock 前端请求，以提高开发效率。</li>
        <li>后端基于 Node.js / Nest.js + MariaDB，并使用 RabbitMQ 和爬虫微服务通信，前端基于 React / Next.js + TypeScript。</li>
        <li>实现了用户认证，新闻浏览，爬取训练数据等一系列功能需求。支持 Docker Compose 一键部署。</li>
        <li>采用敏捷开发模式，与另外两位开发者协同开发。使用 git 进行团队协作，并熟悉使用 GitHub 的 PR 机制。</li>
        <li>项目具有较高的单元测试覆盖率；并采取了安全措施，使用 HttpOnly cookie，和 JWT 用户认证，和 bcrypt 存储密码。</li>
        <li>在项目开发过程中，我深入学习了 Node.js，Nest.js，React，Next.js 和 TypeScript 技术，并熟悉了前后端分离、GraphQL 通信和敏捷开发模式等方面的知识。</li>
      </ul>
      {/* tag() === 'backend' && (
        <>
          <SubHeader>
            <SubHeader.Title>East</SubHeader.Title>
            <SubHeader.Helper>2020.04 - 2020.05</SubHeader.Helper>
          </SubHeader>
          <p>身份：所有者</p>
          <p>
            网址：
            <A href="https://www.github.com/PeterlitsZo/East">github.com/PeterlitsZo/East</A>
          </p>
          <ul style={{ 'column-count': 2, 'column-gap': '0.75rem' }}>
            <li>使用 Go 语言编写的信息检索工具。</li>
            <li>用户友好。采用了自主设计的数据结构，并使用了自己编写的 Lexer 和开源组件 goyacc 提供的 LALR 编译器。能够将用户输入的字符串解析为程序可以处理的语法树，从而支持搜索的布尔运算。</li>
            <li>已实现了基于 TF-IDF 算法的信息检索功能。</li>
            <li>项目包含多个单元测试，保证了代码的可靠性和可维护性。</li>
          </ul>
        </>
      )*/}
      <SubHeader>
        <SubHeader.Title>更多项目</SubHeader.Title>
      </SubHeader>
      <p>
        例如 East（Go 语言编写的信息检索工具）等；请访问我的 Github 主页：<A href="https://www.github.com/PeterlitsZo">Github://PeterlitsZo</A>
      </p>
      {/*
      <Header>开源贡献</Header>
      <ul style={{ 'column-count': 2, 'column-gap': '0.25rem' }}>
        <li><A href="https://github.com/oi-wiki/oi-wiki/commits?author=PeterlitsZo">OI-wiki</A>，一个面向竞赛者的算法网站。贡献了约 20 个 commit，涉及到数论、字符串、图论等。</li>
        <li><A href="https://github.com/system-ui/theme-ui/commits?author=PeterlitsZo">Theme-UI</A>，一个 CSS-in-JS 库，修复了文档，并且更新了其中一个组件。</li>
        <li>emotion，一个 CSS-in-JS 库，发现 bug，并提交了单元测试。</li>
        <li>python-json-pointer，为 JSON Pointer 实现了返回解析列表的功能。</li>
      </ul>
      */}
    </Part>
  );
}

export default Right;
