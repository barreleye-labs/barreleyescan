import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';

import { Container } from '@components/menu/styles';

import MenuItems from './components/MenuItems';

const Menu = () => {
  const menuItems = {
    baseService: ['HOME', 'DASHBOARD'],
    mainService: ['TRANSACTION', 'BLOCKS', 'TOKENS', 'NFTS']
  };

  return (
    <Container>
      <List>
        {Object.keys(menuItems).length &&
          Object.keys(menuItems).map((key, index) => (
            <div key={index}>
              <ListSubheader className="menu-item">Category {index + 1}</ListSubheader>

              <MenuItems items={menuItems[key]} />
            </div>
          ))}
      </List>
    </Container>
  );
};

export default Menu;
