import { useLocation, useNavigate } from 'react-router-dom';

import DefaultLayout from '@layouts/default';
import WalletLayout from '@layouts/wallet';

import Logo from '@components/logo';
import Menu from '@components/menu';

import { Container, Sider } from './styles';

const Layout = () => {
  const { pathname } = useLocation();
  const walletLayoutPath = ['/create', '/transfer'];
  return (
    <>
      <Container>
        <Sider>
          <Logo />
          <Menu />
        </Sider>

        {walletLayoutPath.includes(pathname) ? <WalletLayout /> : <DefaultLayout />}
      </Container>
    </>
  );
};

export default Layout;
