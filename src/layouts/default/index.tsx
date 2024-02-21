import { Outlet } from 'react-router-dom';

import { Container } from './styles.tsx';

import Breadcrumb from '@components/breadcrumb';

const DefaultLayout = () => {
  return (
    <Container>
      <Breadcrumb />

      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
