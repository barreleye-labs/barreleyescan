import { Home, KeyboardArrowRight } from '@mui/icons-material';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListSubheader from '@mui/joy/ListSubheader';
import { Link } from 'react-router-dom';

import { Container } from '@components/menu/styles';

const Menu = () => {
  const titleArray = ['Home', 'dashboard', 'Transaction', 'Blocks'];
  return (
    <Container>
      <List size="lg">
        <ListItem nested>
          <ListSubheader>Category 1</ListSubheader>
          {titleArray.map((item, index) => (
            <Link to={`/${item}`} key={index}>
              <ListItem>
                <ListItemButton color="primary" disabled={false} selected={false} variant="plain">
                  <ListItemDecorator>
                    <Home />
                  </ListItemDecorator>
                  <ListItemContent>{item}</ListItemContent>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </ListItem>
        <ListItem nested>
          <ListSubheader>Category 2</ListSubheader>
          <ListItem>
            <ListItemButton color="primary" disabled={false} selected={false} variant="plain">
              <ListItemDecorator>
                <Home />
              </ListItemDecorator>
              <ListItemContent>Orders</ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>
        </ListItem>
      </List>
    </Container>
  );
};

export default Menu;
