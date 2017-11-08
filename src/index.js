import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import configureStore from './store/configureStore';
import IndexHome from './containers/IndexHome';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.less';
import './styles/index.less';

const store = configureStore();

const routerSet = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexHome} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    {routerSet()}
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
