import { useCallback, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import useSessionStorage from '@hooks/useSessionStorage';

import Breadcrumb from '@components/breadcrumb';
import { Button } from '@components/button';
import { ResponsiveModal } from '@components/modal';

import { ButtonWrapper, Container, Header } from './styles';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [getSession, _, removeSession] = useSessionStorage<string>('key');

  const isKey = getSession();

  const modalHandle = useCallback(() => {
    setOpen((open) => !open);
  }, [open]);

  const onConfirm = () => {
    removeSession();

    modalHandle();
    navigate('/dashboard');
  };

  return (
    <>
      <Container>
        <Header>
          <Breadcrumb />

          {/* Action Buttons */}
          <ButtonWrapper>
            {!isKey ? (
              <Button text="Connect Wallet" size="lg" onClick={() => navigate('/sign-in')} />
            ) : (
              <Button
                text="Clear Private Key"
                size="lg"
                startDecorator={<AutoAwesomeIcon />}
                onClick={() => modalHandle()}
              />
            )}
          </ButtonWrapper>

          <ResponsiveModal
            open={open}
            onConfirm={() => onConfirm()}
            onClose={() => setOpen(false)}
            title="Do you really want to clear your private key from your browser?"
            sub="This action will delete your private key stored in your browser’s storage. You’ll need to type in your private key again to check your balance or send Barrel."
          />
        </Header>

        <Outlet />
      </Container>
    </>
  );
};

export default DefaultLayout;
