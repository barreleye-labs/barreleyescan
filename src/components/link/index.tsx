import Link from '@mui/material/Link';
import { Link as ReactLink } from 'react-router-dom';

interface Props {
  path: string;
  underlink: string;
}
const LinkUnderline = ({ path, underlink }: Props) => {
  return (
    <ReactLink to={path}>
      <Link underline="hover">{underlink}</Link>
    </ReactLink>
  );
};

export default LinkUnderline;
