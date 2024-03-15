import { useEffect } from 'react';

import { barreleyeConfig, nayoungConfig, youngminConfig } from './nodeConfig';
import { Stack } from './styles';

import AvatarCard from '@components/card/AvatarCard';

import AccountService from '@services/account.ts';

const Nodes = () => {
  const { data: barreleye, mutate: barreleyeMutate } = AccountService().GetOneById(
    'f4bcd665c2595fb3253ade200bb80d7e5ddd9ca2'
  );
  const { data: youngmin, mutate: youngminMutate } = AccountService().GetOneById(
    '16645fd53030389ea5252f7755b7fce54d0aa644'
  );
  const { data: nayoung, mutate: nayoungMutate } = AccountService().GetOneById(
    '1e4f5ff2f09df766411402b52e146fb666abdc44'
  );

  useEffect(() => {
    barreleyeMutate();
    youngminMutate();
    nayoungMutate();
  });

  return (
    <Stack spacing={2} direction={{ sm: 'column', lg: 'row' }}>
      <AvatarCard
        config={barreleyeConfig}
        src="src/assets/barreleye.png"
        address={barreleye?.account.address ?? '-'}
        nonce={barreleye?.account.nonce ?? '-'}
        balance={barreleye?.account.balance ?? '-'}
        title="Barreleye"
      />

      <AvatarCard
        config={nayoungConfig}
        src="src/assets/nayoung.jpeg"
        address={nayoung?.account.address ?? '-'}
        nonce={nayoung?.account.nonce ?? '-'}
        balance={nayoung?.account.balance ?? '-'}
        title="Nayoung"
      />

      <AvatarCard
        config={youngminConfig}
        src="src/assets/youngmin.jpeg"
        address={youngmin?.account.address ?? '-'}
        nonce={youngmin?.account.nonce ?? '-'}
        balance={youngmin?.account.balance ?? '-'}
        title="Youngmin"
      />
    </Stack>
  );
};

export default Nodes;
