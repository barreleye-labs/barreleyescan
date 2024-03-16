import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FilterNoneIcon from '@mui/icons-material/FilterNone';
import { debounce } from 'lodash-es';
import { useSnackbar } from 'notistack';

import AccountService from '@services/account';

import Card from '@components/card';
import Detail from '@components/detail';
import Row from '@components/row';
import SearchInput from '@components/searchInput';

import { Char } from '@utils';

const Account = () => {
  const navigate = useNavigate();
  const { address } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { data, mutate } = AccountService().GetOneById(address as string);

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
    Char.isAddress(address)
      ? navigate(`/account/${Char.remove0x(address)}`)
      : showToast({ variant: 'error', message: 'Check your address format' });
  }, 500);

  const onChange = useCallback(async (e) => {
    fetchAccount(Char.remove0x(e.target.value));
  }, []);

  return (
    <Card>
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
                  ? `${Number(Char.hexToDecimal(data.account.balance)).toLocaleString('ko-KR')} Barrel`
                  : '0 Barrel'
              }
            ></Row>
            <Row label="Nonce" content={data?.account ? Char.hexToDecimal(data.account.nonce) : '0'}></Row>
          </>
        )}
      </Detail>
    </Card>
  );
};

export default Account;
