import DefaultLayout from '@layouts/default';

import Logo from '@components/logo';
import Menu from '@components/menu';

import { Container, Sider } from './styles';

const Layout = () => {
  console.count('layout');
  return (
    <Container>
      <Sider className="menu">
        <Logo />
        <Menu />
      </Sider>

      <DefaultLayout />
    </Container>
  );
};

export default Layout;
