import React from 'react'

import { Route, Switch } from 'react-router-dom'

import ScrollToTop from '../../Components/Scroll/ScrollToTop'
import LoadingSpinnerFull from '../../View/Widget/LoadingSpinner/Full'
import uris from './URI'

const Router: React.FC = () => {
  const routes = [
    {
      path: uris.home,
      exact: true,
      Component: React.lazy(() => import('../../Controller/Home/Index')),
    },
    {
      path: uris.tradingPlatform,
      exact: true,
      Component: React.lazy(() => import('../../Controller/TradingPlatform/Index')),
    },
    {
      path: uris.capitalManagement,
      exact: true,
      Component: React.lazy(
        () => import('../../Controller/CapitalManagement/CapitalManagement/Index'),
      ),
    },
    {
      path: uris.tradingFund,
      exact: true,
      Component: React.lazy(() => import('../../Controller/CapitalManagement/TradingFund/Index')),
    },
    {
      path: uris.miningFund,
      exact: true,
      Component: React.lazy(() => import('../../Controller/CapitalManagement/MiningFund/Index')),
    },
    {
      path: uris.clientLogin,
      exact: true,
      Component: React.lazy(() => import('../../Controller/Client/Login/Index')),
    },
    {
      path: uris.contact,
      exact: true,
      Component: React.lazy(() => import('../../Controller/Contact/Index')),
    },
    {
      path: uris.clientPasswordForgot,
      exact: true,
      Component: React.lazy(() => import('../../Controller/Client/Password/Forgot/Index')),
    },
    {
      path: uris.clientPasswordReset,
      exact: true,
      Component: React.lazy(() => import('../../Controller/Client/Password/Reset/Index')),
    },
    {
      path: uris.about,
      exact: true,
      Component: React.lazy(() => import('../../Controller/About/Index')),
    },
    {
      path: '*',
      Component: React.lazy(() => import('../../Controller/Error/404/Index')),
    },
  ]

  return (
    <ScrollToTop>
      <Route
        render={(state) => {
          const { location } = state
          return (
            <Switch location={location}>
              {routes.map(({ path, Component, exact }) => (
                <Route
                  path={path}
                  key={path}
                  exact={exact}
                  render={() => (
                    <React.Suspense fallback={<LoadingSpinnerFull loading />}>
                      <Component />
                    </React.Suspense>
                  )}
                />
              ))}
            </Switch>
          )
        }}
      />
    </ScrollToTop>
  )
}

export default Router
