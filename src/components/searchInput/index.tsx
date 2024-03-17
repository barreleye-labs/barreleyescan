import { ChangeEvent, memo } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { Container } from './styles';

interface Props {
  onChange?: (e: ChangeEvent) => void;
}
const SearchInput = memo(({ onChange }: Props) => {
  return (
    <Container>
      <Button variant="soft" size="sm">
        <SearchIcon fontSize="large" />
      </Button>
      <Input
        size="md"
        placeholder="Search by account address."
        sx={{
          '--Input-radius': `${16}px`,
          '--Input-decoratorChildHeight': `${29}px`
        }}
        onChange={(e) => onChange && onChange(e)}
      />
    </Container>
  );
});

export default SearchInput;
