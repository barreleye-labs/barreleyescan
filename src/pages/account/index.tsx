import { debounce } from 'lodash-es';
import { useSnackbar } from 'notistack';

import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from './styles';

import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import Row from '@components/row';
import SearchInput from '@components/searchInput';

import { Crypto } from '@utils';

import FaucetService from '@services/faucet.ts';

const Account = () => {
  const navigate = useNavigate();
  const { address } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { data, error, mutate } = FaucetService().GetOneById(address as string);

  useEffect(() => {
    address && mutate();
  }, [address]);

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const fetchAccount = debounce(async (address: string) => {
    /**
     * validator
     */
    Crypto.isAddress(address)
      ? navigate(`/account/${Crypto.remove0x(address)}`)
      : showToast({ variant: 'error', message: 'Check your address format' });
  }, 500);

  const onChange = useCallback(async (e) => {
    fetchAccount(Crypto.remove0x(e.target.value));
  }, []);

  return (
    <Container>
      <SearchInput onChange={onChange} />

      <Detail icon={<FilterNoneIcon />} title={address ? `0x${address}` : 'No Account Info'}>
        {!address ? (
          'Search Account!'
        ) : (
          <>
            <Row label="Address" content={`0x${address}`}></Row>

            <Row
              label="Balance"
              content={
                data?.account
                  ? `${Number(Crypto.hexToDecimal(data.account.balance)).toLocaleString('ko-KR')} Barrel`
                  : '0 Barrel'
              }
            ></Row>
            <Row label="Nonce" content={data?.account ? Crypto.hexToDecimal(data.account.nonce) : '0'}></Row>
          </>
        )}
      </Detail>
    </Container>
  );
};

export default Account;
