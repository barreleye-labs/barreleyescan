import { Container } from './styles.tsx';

import Breadcrumb from '@components/breadcrumb';
import SearchInput from '@components/searchInput';

import RouterViews from '@pages/index';

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
