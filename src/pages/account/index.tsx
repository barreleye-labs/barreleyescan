import { IBlock } from '@type/api';
import { debounce } from 'lodash-es';
import { useSnackbar } from 'notistack';
import useSWR from 'swr';

import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from './styles';

import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import Row from '@components/row';
import SearchInput from '@components/searchInput';

import { Crypto, fetcher } from '@utils';

const Account = () => {
  const navigate = useNavigate();
  const { address } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { data } = useSWR<IBlock>(address && `/api/accounts/${address}`, fetcher);

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const fetchAccount = useCallback(
    debounce(async (address: string) => {
      /**
       * validator
       */
      Crypto.isAddress(address)
        ? navigate(`/account/${address}`)
        : showToast({ variant: 'error', message: 'Check your address format' });
    }, 500),
    [data]
  );
  {
  }
  const onChange = useCallback(async (e) => {
    fetchAccount(e.target.value);
  }, []);

  return (
    <Container>
      <SearchInput onChange={onChange} />

      <Detail icon={<FilterNoneIcon />} title={address ?? 'No Account Info'}>
        {!address ? (
          'Search Account!'
        ) : (
          <>
            <Row label="Address" content={address}></Row>
            <Row
              label="Balance"
              content={
                data?.data
                  ? `${Number(Crypto.hexToDecimal(data.data.account.balance)).toLocaleString('ko-KR')} Barrel`
                  : '0 Barrel'
              }
            ></Row>
            <Row label="Nonce" content={data?.data ? Crypto.hexToDecimal(data.data.account.nonce) : '0'}></Row>
          </>
        )}
      </Detail>
    </Container>
  );
};

export default Account;
