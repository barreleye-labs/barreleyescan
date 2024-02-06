import Breadcrumb from '@src/components/breadcrumb';

import SearchInput from '@components/searchInput';

import RouterViews from '@pages/index';

import { Container } from './styles.tsx';

const DefaultLayout = () => {
  return (
    <Container>
      <Breadcrumb />

      <SearchInput />

      <RouterViews />
    </Container>
  );
};

export default DefaultLayout;
