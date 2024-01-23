/** @jsxImportSource @emotion/react */
import { Container } from '@layouts/default/styles';

import RouterViews from '@pages/index';

import Menu from '@components/menu';

const DefaultLayout = () => {
  return (
    <>
      <Container>
        <Menu />
        <RouterViews />
      </Container>
    </>
  );
};

export default DefaultLayout;
