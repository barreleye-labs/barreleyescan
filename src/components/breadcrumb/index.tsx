import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

import { Char } from '@utils';

import { Breadcrumbs } from './styles';

const Breadcrumb = () => {
  const location = useLocation();
  const locationArr = location.pathname.split('/');
  const [height, setHeight] = useState(locationArr[2]);

  useEffect(() => {
    setHeight(locationArr[2]);
  }, [height]);

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb">
      {locationArr?.map((path, index) => {
        if (index > 0) {
          console.log('path', path, index);
          if ((path === 'transaction' || path === 'account') && index === 2) {
            return <div key={index}>{Char.ellipsis(path.toUpperCase())}</div>;
          } else {
            return <div key={index}>{path.toUpperCase()}</div>;
          }
        } else {
          return <HomeIcon key={index} sx={{ mr: 0.5 }} fontSize="inherit" />;
        }
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
