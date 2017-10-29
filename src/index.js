import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import configureStore from './store/configureStore';
import HomePage from './containers/HomePageContainer';
// import Page2 from './containers/Type2Container';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.less';
import './styles/index.less';

const store = configureStore();

const routerSet = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
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
