import Breadcrumb from '@src/components/breadcrumb';

import { Container, Content, Sider } from '@layouts/default/styles';

import RouterViews from '@pages/index';

import Logo from '@components/logo';
import Menu from '@components/menu';
import SearchInput from '@components/searchInput';

const DefaultLayout = () => {
  return (
    <>
      <Container>
        <Sider>
          <Logo />
          <Menu />
        </Sider>

        <Content>
          <Breadcrumb />

          <SearchInput />

          <RouterViews />
        </Content>
      </Container>
    </>
  );
};

export default DefaultLayout;
