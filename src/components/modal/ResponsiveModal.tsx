import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

interface Props {
  open: boolean;
  title: string;
  sub: string;
  onClose: () => void;
  onConfirm: () => void;
}
const ResponsiveModal = ({ open, title, sub, onClose, onConfirm }: Props) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset'
            }
          })}
        >
          <Typography id="nested-modal-title" level="h2">
            {title}
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            {sub}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' }
            }}
          >
            <Button variant="solid" color="primary" onClick={onConfirm}>
              Continue
            </Button>
            <Button variant="outlined" color="neutral" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ResponsiveModal;
