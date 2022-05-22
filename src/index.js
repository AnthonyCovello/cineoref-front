// ? Import modules
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// ? Import composants
import App from 'src/components/App';

// ? Import store
import store from './store';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

const rootReactElement = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

const rootDOMElement = document.getElementById('root');

render(rootReactElement, rootDOMElement);
