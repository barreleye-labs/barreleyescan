import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';

import { Container } from '@components/menu/styles';

import MenuItems from './components/MenuItems';

interface MenuItemsType {
  [key: string]: string[];
}

const Menu = () => {
  const menuItems: MenuItemsType = {
    baseService: ['home', 'dashboard'],
    mainService: ['transactions', 'blocks', 'tokens', 'nfts']
  };

  return (
    <Container>
      <List>
        {Object.keys(menuItems).length &&
          Object.keys(menuItems).map((key, index) => (
            <div key={index}>
              <ListSubheader>Category {index + 1}</ListSubheader>

              <MenuItems items={menuItems[key]} />
            </div>
          ))}
      </List>
    </Container>
  );
};

export default Menu;
