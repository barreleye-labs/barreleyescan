import { ListItemContent, ListItemDecorator } from '@mui/joy';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Link, useLocation } from 'react-router-dom';
import { Util } from 'src/utils';

interface Props {
  items: string[];
}

const MenuItems = ({ items }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="gap">
      {items.length &&
        items.map((item: string, index: number) => (
          <Link to={`/${item}`} key={index}>
            <ListItem>
              <ListItemButton
                className="menu-item"
                disabled={false}
                selected={pathname.slice(1) === item ? true : false}
                variant="plain"
              >
                <ListItemDecorator>{/* <Home /> */}</ListItemDecorator>
                <ListItemContent>{Util.Char.upperFirstString(item)}</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
    </div>
  );
};

export default MenuItems;
