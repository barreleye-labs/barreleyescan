import { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Sider } from './styles';

import Logo from '@components/logo';
import Menu from '@components/menu';

import DefaultLayout from '@layouts/default';
import WalletLayout from '@layouts/wallet';

const walletLayoutPath = ['/create', '/transfer', '/faucet'];

const Layout = () => {
  const { pathname } = useLocation();

  const layoutComponent = useMemo(
    () => (walletLayoutPath.includes(pathname) ? <WalletLayout /> : <DefaultLayout />),
    [pathname]
  );
  return (
    <>
      <Container>
        <Sider>
          <Logo />
          <Menu />
        </Sider>

        {layoutComponent}
      </Container>
    </>
  );
};

export default Layout;
