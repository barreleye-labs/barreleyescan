import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import GridViewColumnIcon from '@mui/icons-material/ChildCareTwoTone';
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Link, useLocation } from 'react-router-dom';
import { Char } from 'src/utils';

interface Props {
  items: string[];
}

const MenuItems = ({ items }: Props) => {
  const { pathname } = useLocation();

  const icons = [GridViewRoundedIcon, FilterNoneRoundedIcon, BeenhereRoundedIcon, AlternateEmailRoundedIcon];
  return (
    <div className="gap">
      {items.length &&
        items.map((item: string, index: number) => (
          <Link to={`/${item}`} key={index}>
            <ListItem>
              <ListItemButton
                className="menu-item"
                disabled={false}
                selected={
                  pathname.split('/')[1] === item || pathname.split('/')[1] === item.slice(0, -1) ? true : false
                }
                variant="plain"
              >
                <ListItemDecorator component={icons[index]}></ListItemDecorator>
                <ListItemContent>{Char.upperFirstString(item)}</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
    </div>
  );
};

export default MenuItems;
