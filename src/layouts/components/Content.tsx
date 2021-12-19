import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'tdesign-react';
import { routes } from 'configs';
import UnAuthorized from 'pages/Error/403';
import NotFound from 'pages/Error/404';
import ErrorPage from 'pages/Error/500';

const { Content } = Layout;

export default React.memo(() => (
  <Content>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} exact={route.exact} path={route.path} component={route.Component} />
      ))}
      <Route path='/403' component={UnAuthorized} />
      <Route path='/500' component={ErrorPage} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Content>
));
