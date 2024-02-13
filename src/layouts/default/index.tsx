import { Outlet } from 'react-router-dom';

import { Container } from './styles.tsx';

import Breadcrumb from '@components/breadcrumb';
import SearchInput from '@components/searchInput';

const DefaultLayout = () => {
  return (
    <Container>
      <Breadcrumb />

      <SearchInput />

      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
