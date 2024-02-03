import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';

import { Container } from '@components/menu/styles';

import MenuItems from './components/MenuItems';
import { type Route, routes } from './routes';

const Menu = () => {
  return (
    <Container>
      <List>
        {Object.keys(routes).length &&
          routes.map((route: Route, index: number) => (
            <div className="menu-block" key={index}>
              <ListSubheader>{route.category}</ListSubheader>

              <MenuItems content={route.content} />
            </div>
          ))}
      </List>
    </Container>
  );
};

export default Menu;
