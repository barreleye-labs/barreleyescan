import { ReactNode } from 'react';

import Grid from '@mui/material/Grid';

import { Container } from './styles';

interface Props {
  label: string;
  content?: string | number;
  children?: ReactNode;
}

const Row = (props: Props) => {
  return (
    <Container>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid className="label" size={4}>
          {props.label}
        </Grid>
        <Grid className="content" size={{ xs: 4, sm: 8, md: 8 }}>
          {props.content}
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Row;
