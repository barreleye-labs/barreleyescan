import Breadcrumb from '@src/components/breadcrumb';

import { Content } from '@layouts/default/styles';

import RouterViews from '@pages/index';

import SearchInput from '@components/searchInput';

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
