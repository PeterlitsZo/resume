import Popover from '../../../../basic/Popover/Popover';
import SubHeader from '../../../../basic/SubHeader';

const DesignPattern = () => (
  <Popover inSpan="设计模式">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《Head First 设计模式》。</li>
    </ul>
    <SubHeader>经历</SubHeader>
    <ul>
      <li>了解部分创建型模式：单例模式、工厂模式、抽象工厂模式、生成器模式。</li>
      <li>了解部分结构型模式：适配器模式、享元模式、组合模式、外观模式。</li>
      <li>了解部分行为模式：观察者模式、命令模式、策略模式、模板方法模式、迭代器模式、状态模式。</li>
    </ul>
  </Popover>
);

export default DesignPattern;
