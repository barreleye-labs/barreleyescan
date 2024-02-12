import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Sider } from './styles';

import Logo from '@components/logo';
import Menu from '@components/menu';

import DefaultLayout from '@layouts/default';
import WalletLayout from '@layouts/wallet';

const Layout = () => {
  const { pathname } = useLocation();
  const walletLayoutPath = ['/create', '/transfer'];

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
