import { createBrowserRouter } from 'react-router-dom';

import loadable from '@loadable/component';

import Blocks from '@pages/blocks';
import Transactions from '@pages/transactions';

export const router = createBrowserRouter([
  {
    Component: loadable(() => import('@src/layouts')),
    ErrorBoundary: loadable(() => import('@pages/errorPage')),
    children: [
      {
        path: '/',
        Component: loadable(() => import('@pages/dashboard'))
      },
      {
        path: '/blocks',
        element: <Blocks isPagination={true} isSimpleData={false} size={10} />
      },

      { path: '/block/:height', Component: loadable(() => import('@pages/block')) },

      {
        path: '/transactions',
        element: <Transactions isPagination={true} size={10} isSimpleData={false} />
      },

      { path: '/transaction/:hash', Component: loadable(() => import('@pages/transaction')) },

      {
        path: '/account/:address?',
        Component: loadable(() => import('src/pages/account'))
      },

      {
        path: '/nodes',
        Component: loadable(() => import('src/pages/nodes'))
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
      },
      // ==========================================================
      {
        path: '/sign-in',
        Component: loadable(() => import('@pages/sign-in'))
      }
    ]
  }
]);
