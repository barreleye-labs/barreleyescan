import Grid from '@mui/material/Grid';

import { Container } from './styles';

interface Props {
  label: string;
  content: string;
}
const Row = (props: Props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4} className="label">
          {props.label}
        </Grid>
        <Grid item xs={8} className="content">
          {props.content}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Row;
