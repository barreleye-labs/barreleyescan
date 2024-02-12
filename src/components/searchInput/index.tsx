import { Container } from './styles';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

const SearchInput = () => {
  return (
    <Container>
      <Button variant="soft" size="sm">
        <SearchIcon fontSize="large" />
      </Button>
      <Input
        size="md"
        placeholder="You can search for block number, account address, transaction hash, token name, or token symbol"
        sx={{
          '--Input-radius': `${16}px`,
          '--Input-decoratorChildHeight': `${29}px`
        }}
      />
    </Container>
  );
};

export default SearchInput;
