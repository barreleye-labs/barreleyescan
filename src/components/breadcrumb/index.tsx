import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Breadcrumb = () => {
  const location = useLocation();

  const [height, setHeight] = useState(location.pathname.split('/')[2]);

  useEffect(() => {
    setHeight(location.pathname.split('/')[2]);
  }, [height]);

  return (
    <>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {location.pathname.split('/').length &&
          location.pathname.split('/').map((path, index) => {
            if (index > 0) {
              return <div key={index}>{path.toUpperCase()}</div>;
            } else {
              return <HomeIcon key={index} sx={{ mr: 0.5 }} fontSize="inherit" />;
            }
          })}
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
