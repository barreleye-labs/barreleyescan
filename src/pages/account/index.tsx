import { IAccount } from '@type/api';
import axios from 'axios';
import { debounce } from 'lodash-es';
import { useSnackbar } from 'notistack';

import { useCallback, useState } from 'react';

import { Container } from './styles';

import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import Row from '@components/row';
import SearchInput from '@components/searchInput';

const Account = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState<IAccount>();

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const fetchAccount = useCallback(
    debounce(async (address: string) => {
      try {
        const {
          data: {
            data: { account }
          }
        } = await axios.get(`/api/accounts/${address}`);

        setData(account);
      } catch (err) {
        showToast({ variant: 'error', message: err.response.data.Error ?? 'No Account Data' });
      }
    }, 500),
    [data]
  );

  const onChange = useCallback(async (e) => {
    fetchAccount(e.target.value);
  }, []);
  return (
    <Container>
      <SearchInput onChange={onChange} />

      <Detail icon={<FilterNoneIcon />} title={data?.address ?? 'No Account Info'}>
        {data ? (
          <>
            <Row label="Address" content={data.address}></Row>
            <Row label="Balance" content={data.balance}></Row>
            <Row label="Nonce" content={data.nonce}></Row>
          </>
        ) : (
          'Search Your Address!'
        )}
      </Detail>
    </Container>
  );
};

export default Account;
