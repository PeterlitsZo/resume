/* @refresh reload */
import { render } from 'solid-js/web';
import { TagProvider } from './contexts/tag';

import './index.scss';
import App from './pages/App';

render(() => (
  <TagProvider tag='backend'>
    <App />
  </TagProvider>
), document.getElementById('root') as HTMLElement);
