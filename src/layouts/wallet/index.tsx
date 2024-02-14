import { Outlet } from 'react-router-dom';

import { Content } from './styles.tsx';

const WalletLayout = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default WalletLayout;
