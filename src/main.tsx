import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from '@src/App';
import '@src/App.css';

import Blocks from '@pages/blocks';
import Dashboard from '@pages/dashboard';
import ErrorPage from '@pages/errorPage';
import Home from '@pages/home';
import Transaction from '@pages/transaction';

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
      {
        path: '/transaction',
        Component: Transaction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
