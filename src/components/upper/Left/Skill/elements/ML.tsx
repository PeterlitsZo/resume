import Popover from '../../../../basic/Popover';
import SubHeader from '../../../../basic/SubHeader';

const ML = () => (
  <Popover inSpan="机器学习">
    <SubHeader>书籍</SubHeader>
    <ul>
      <li>《深度学习图解》。</li>
      <li>《深度学习入门：基于 Python 的理论与实现》。</li>
      <li>《深度学习进阶：自然语言处理》</li>
    </ul>
    <SubHeader>自我评估</SubHeader>
    <ul>
      <li>了解入门级别的知识。包括前向传播、梯度下降、反向传播、dropout 正则化、批量梯度下降、激活函数、卷积神经网络等基础概念。</li>
      <li>使用过 PyTorch，做过 word2vec 和 LSTM 模型下的情感分类。</li>
      <li>非系统学习过，但是抱有一定的兴趣。</li>
    </ul>
  </Popover>
);

export default ML;
