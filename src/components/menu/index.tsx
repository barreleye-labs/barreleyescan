import { MemoizedMenuItems } from './components/MenuItems';
import { type Route, routes } from './routes';

import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';

import { Container } from '@components/menu/styles';

const Menu = () => {
  return (
    <Container>
      <List>
        {routes?.map((route: Route, index: number) => (
          <div className="menu-block" key={index}>
            <ListSubheader>{route.category}</ListSubheader>

            <MemoizedMenuItems content={route.content} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Menu;
