import { useCallback, useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Button from '@mui/joy/Button';
import { Chip } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import AccountService from '@services/account';

import useSessionStorage from '@hooks/useSessionStorage';

import Breadcrumb from '@components/breadcrumb';
import { ResponsiveModal } from '@components/modal';
import Ripple from '@components/ripple';

import { Char, Crypto } from '@utils';

import { commonPrivateKeyStore } from '@src/stores';

import { ButtonWrapper, Container, Header } from './styles';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const commonPrivateKey = commonPrivateKeyStore((state) => state.privateKey);
  const removeCommonPrivateKey = commonPrivateKeyStore((state) => state.remove);
  const setCommonPrivateKey = commonPrivateKeyStore((state) => state.set);
  const setCommonAddress = commonPrivateKeyStore((state) => state.setAddress);
  const commonAddress = commonPrivateKeyStore((state) => state.address);

  const [getSession, _, removeSession] = useSessionStorage<string>('key');
  const privateKey = getSession();
  const { data } = AccountService().GetOneByIdQuery(commonAddress && commonAddress, {
    refreshInterval: true
  });
  const modalHandle = useCallback(() => {
    setOpen((open) => !open);
  }, [open]);

  const onConfirm = () => {
    removeSession();
    removeCommonPrivateKey();

    modalHandle();
    navigate('/dashboard');
  };

  useEffect(() => {
    if (privateKey) {
      setCommonPrivateKey(privateKey);
    }
  }, []);

  useEffect(() => {
    fetchAddress();
  }, [commonPrivateKey]);

  const fetchAddress = async () => {
    if (commonPrivateKey) {
      const value = (await Crypto.privateKeyToAddress(commonPrivateKey)) as string;

      setCommonAddress(value);
    }
  };

  const ellipsisAddress = useMemo(() => commonAddress && Char.ellipsis(commonAddress), [commonAddress]);
  return (
    <>
      <Container>
        <Header>
          <Breadcrumb />

          {/* Action Buttons */}
          <ButtonWrapper>
            {!privateKey ? (
              <Button variant="outlined" color="neutral" size="lg" onClick={() => navigate('/sign-in')}>
                Connect Wallet
              </Button>
            ) : (
              <>
                <HtmlTooltip
                  title={
                    <>
                      <Typography color="inherit">
                        <b>Balance: </b>
                        <em>{`${data?.account.balance ? Char.hexToBalance(data?.account.balance) : 0} Barrel`}</em>
                      </Typography>
                    </>
                  }
                >
                  <Button
                    variant="outlined"
                    color="neutral"
                    className="success"
                    startDecorator={<Ripple />}
                    size="lg"
                    onClick={() => navigate(`/account/${commonAddress}`)}
                  >{`0x${ellipsisAddress}`}</Button>
                </HtmlTooltip>

                <Button
                  variant="outlined"
                  color="neutral"
                  size="lg"
                  startDecorator={<AutoAwesomeIcon />}
                  onClick={() => modalHandle()}
                >
                  Clear Private Key
                </Button>
              </>
            )}
            <Chip label="Main Network" variant="outlined" icon={<RssFeedIcon />} />
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
