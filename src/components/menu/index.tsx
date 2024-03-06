import { useCallback, useState } from 'react';

import MenuItems from './components/MenuItems';
import { type Route, routes } from './routes';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import Button from '@mui/material/Button';

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
        <List className={`menu-list  ${active ? 'active' : ''}`}>
          {routes?.map((route: Route, index: number) => (
            <div className="menu-block" key={index}>
              <ListSubheader>{route.category}</ListSubheader>

              <MenuItems content={route.content} onClick={onClick} />
            </div>
          ))}
        </List>
      </div>
      <div className="copyRight">
        <span>
          Copyright © 2023 - 2024 Barreleye Team,
          <br /> All Rights Reserved.
        </span>
        {/*<div>*/}
        {/*  <Button variant="text">*/}
        {/*    <LinkedInIcon />*/}
        {/*  </Button>*/}
        {/*  <Button>*/}
        {/*    <LinkedInIcon />*/}
        {/*  </Button>*/}
        {/*  <Button>*/}
        {/*    <GitHubIcon />{' '}*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </Container>
  );
};

export default Menu;
