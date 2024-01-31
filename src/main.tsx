import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from '@src/App';
import '@src/App.css';

import Address from '@pages/Address';
import Block from '@pages/block';
import Blocks from '@pages/blocks';
import Dashboard from '@pages/dashboard';
import ErrorPage from '@pages/errorPage';
import Home from '@pages/home';
import Nfts from '@pages/nfts';
import Tokens from '@pages/tokens';
import Transaction from '@pages/transaction';
import Transactions from '@pages/transactions';

import './index.css';
import './styles/main.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        Component: Home
      },
      {
        path: '/dashboard',
        Component: Dashboard
      },
      {
        path: '/blocks',
        Component: Blocks
      },

      { path: '/block/:height', Component: Block },

      {
        path: '/transactions',
        Component: Transactions
      },

      { path: '/transaction/:hash/:height', Component: Transaction },

      {
        path: '/address',
        Component: Address
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
