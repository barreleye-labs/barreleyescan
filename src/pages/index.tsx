import { Outlet } from 'react-router-dom';

import { Content } from './style';

const RouterViews = () => {
  return (
    <>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default RouterViews;
