import { useCallback, useState } from 'react';

import MenuItems from './components/MenuItems';
import { type Route, routes } from './routes';

import MenuIcon from '@mui/icons-material/Menu';
import ListJoy from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';

import { Container } from '@components/menu/styles';

const Menu = () => {
  const [active, setActive] = useState(false);
  const onClick = useCallback(() => {
    setActive(!active);
  }, [active]);
  return (
    <Container>
      <div>
        <div className="menu-icon" onClick={onClick}>
          <MenuIcon />
        </div>
        <ListJoy className={`menu-list  ${active ? 'active' : ''}`}>
          {routes?.map((route: Route, index: number) => (
            <div className="menu-block" key={index}>
              <ListSubheader>{route.category}</ListSubheader>

              <MenuItems content={route.content} onClick={onClick} />
            </div>
          ))}
        </ListJoy>
      </div>

      <div className="copyRight">
        <div>
          Copyright © 2023 - 2024 Barreleye Team,
          <br /> All Rights Reserved.
        </div>
      </div>
    </Container>
  );
};

export default Menu;
