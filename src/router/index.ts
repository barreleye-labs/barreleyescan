import loadable from '@loadable/component';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: loadable(() => import('@src/App')),
    errorElement: loadable(() => import('@pages/errorPage')),
    children: [
      {
        path: '/home',
        Component: loadable(() => import('@pages/home'))
      },

      {
        path: '/dashboard',
        Component: loadable(() => import('@pages/dashboard'))
      },
      {
        path: '/blocks',
        Component: loadable(() => import('@pages/blocks'))
      },

      { path: '/block/:height', Component: loadable(() => import('@pages/block')) },

      {
        path: '/transactions',
        Component: loadable(() => import('@pages/transactions'))
      },

      { path: '/transaction/:hash', Component: loadable(() => import('@pages/transaction')) },

      {
        path: '/address',
        Component: loadable(() => import('@pages/address'))
      },

      // ===================== wallet ===============================
      {
        path: '/create',
        Component: loadable(() => import('@pages/wallet/create'))
      },
      {
        path: '/transfer',
        Component: loadable(() => import('@pages/wallet/transfer'))
      },
      {
        path: '/faucet',
        Component: loadable(() => import('@pages/wallet/faucet'))
      }
      // ==========================================================
    ]
  }
]);
