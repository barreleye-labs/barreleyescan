import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Container } from './styles';

const Detail = (props) => {
  const { icon, title, subheader, isAction } = props;

  return (
    <Container>
      <Card>
        <CardHeader
          avatar={icon}
          title={title}
          subheader={subheader}
          action={
            isAction && (
              <>
                <IconButton aria-label="settings" onClick={(data) => props.onClickPrev(data)}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton aria-label="settings" onClick={(data) => props.onClickAfter(data)}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </>
            )
          }
        />
        <Divider variant="middle" flexItem />
        <CardContent>{props.children}</CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
