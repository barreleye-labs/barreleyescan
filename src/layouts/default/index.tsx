import Breadcrumb from '@src/components/breadcrumb';

import SearchInput from '@components/searchInput';

import { Container, Content, Sider } from '@layouts/default/styles';

import RouterViews from '@pages/index';

const DefaultLayout = () => {
  return (
    <>
      <Content>
        <Breadcrumb />

        <SearchInput />

        <RouterViews />
      </Content>
    </>
  );
};

export default DefaultLayout;
