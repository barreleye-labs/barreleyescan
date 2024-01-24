import { Home } from '@mui/icons-material';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
  return (
    <div>
      {items.length &&
        items.map((item: string, index: number) => (
          <Link to={`/${item.toLocaleLowerCase()}`} key={index}>
            <ListItem>
              <ListItemButton className="menu-item" color="neutral" disabled={false} selected={false} variant="plain">
                <ListItemDecorator>
                  <Home />
                </ListItemDecorator>
                <ListItemContent>{item}</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
    </div>
  );
};

export default MenuItems;
