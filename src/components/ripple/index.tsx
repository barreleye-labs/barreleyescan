import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Container = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#b1e1dd',
    color: '#b1e1dd',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

export default function Ripple() {
  return (
    <Container overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot"></Container>
  );
}
