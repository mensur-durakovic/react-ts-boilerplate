import React, { Suspense } from 'react';
import Sidebar from '../layout/sidebar';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';

const Dashboard = React.lazy(() => import('../screens/dashboard/dashboard'));
const Reports = React.lazy(() => import('../screens/reports/reports'));
const Market = React.lazy(() => import('../screens/market/market'));

const publicPaths = [
  { exact: true, path: '/', component: Dashboard },
  { exact: true, path: '/dashboard', component: Dashboard },
  { exact: true, path: '/reports', component: Reports },
  { exact: true, path: '/market', component: Market }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<div />}>
          <div className="container">
            <Sidebar />
            {publicRoutes}
          </div>

          {/* <Route component={NotFound} /> */}
        </Suspense>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
