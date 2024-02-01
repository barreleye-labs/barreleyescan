import loadable from '@loadable/component';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@src/App.css';

import './index.css';
import './styles/main.css';

const router = createBrowserRouter([
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

      { path: '/block/:height', Component: import('@pages/block') },

      {
        path: '/transactions',
        Component: loadable(() => import('@pages/transactions'))
      },

      { path: '/transaction/:hash/:height', Component: loadable(() => import('@pages/transaction')) },

      {
        path: '/address',
        Component: loadable(() => import('@pages/address'))
      }
      // {
      //   path: '/nfts',
      //   Component: Nfts
      // },
      // {
      //   path: '/tokens',
      //   Component: Tokens
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
