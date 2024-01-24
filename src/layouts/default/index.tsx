/** @jsxImportSource @emotion/react */
import { Container, Sider } from '@layouts/default/styles';

import RouterViews from '@pages/index';

import Logo from '@components/logo';
import Menu from '@components/menu';

const DefaultLayout = () => {
  return (
    <>
      <Container>
        <Sider>
          <Logo />
          <Menu />
        </Sider>
        <RouterViews />
      </Container>
    </>
  );
};

export default DefaultLayout;
