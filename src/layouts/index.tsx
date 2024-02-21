import { Container, Sider } from './styles';

import Logo from '@components/logo';
import Menu from '@components/menu';

import DefaultLayout from '@layouts/default';

const Layout = () => {
  return (
    <Container>
      <Sider>
        <Logo />
        <Menu />
      </Sider>

      <DefaultLayout />
    </Container>
  );
};

export default Layout;
