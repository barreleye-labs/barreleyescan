import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from './styles';

import HomeIcon from '@mui/icons-material/Home';

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
          return <div key={index}>{path.toUpperCase()}</div>;
        } else {
          return <HomeIcon key={index} sx={{ mr: 0.5 }} fontSize="inherit" />;
        }
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
