import { useState } from 'react';
import { Transition } from 'react-transition-group';

import { Modal } from './styles.tsx';

import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  DialogContent,
  DialogTitle,
  ModalDialog
} from '@mui/joy';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';

const TransitionModal = ({ open = false, onClose }) => {
  return (
    <Transition in={open} timeout={200}>
      {(state: string) => (
        <Modal
          keepMounted
          open={!['exited', 'exiting'].includes(state)}
          onClose={onClose}
          slotProps={{
            backdrop: {
              sx: {
                opacity: 0,
                backdropFilter: 'none',
                transition: `opacity 400ms, backdrop-filter 400ms`,
                ...{
                  entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                  entered: { opacity: 1, backdropFilter: 'blur(8px)' }
                }[state]
              }
            }
          }}
          sx={{
            visibility: state === 'exited' ? 'hidden' : 'visible'
          }}
        >
          <ModalDialog
            size="lg"
            sx={{
              width: '65%',
              height: '520px',
              opacity: 0,
              transition: `opacity 300ms`,
              ...{
                entering: { opacity: 1 },
                entered: { opacity: 1 }
              }[state]
            }}
          >
            <DialogContent>
              <Card
                size="lg"
                variant="plain"
                sx={{
                  maxWidth: '100%',
                  width: '100%',
                  // to make the demo resizable
                  overflow: 'auto'
                }}
              >
                <CardOverflow
                  variant="solid"
                  color="primary"
                  sx={{
                    flex: '0 0 145px',
                    display: 'flex',
                    flexDirection: 'column',

                    px: 'var(--Card-padding)'
                  }}
                >
                  <div>
                    <Badge
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeInset="14%"
                      color="success"
                      sx={{
                        [`& .${badgeClasses.badge}`]: {
                          '&::after': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            animation: 'ripple 1.2s infinite ease-in-out',
                            border: '2px solid',
                            borderColor: 'success.500',
                            content: '""'
                          }
                        },
                        '@keyframes ripple': {
                          '0%': {
                            transform: 'scale(1)',
                            opacity: 1
                          },
                          '100%': {
                            transform: 'scale(2)',
                            opacity: 0
                          }
                        }
                      }}
                    >
                      <Avatar sx={{ '--Avatar-size': '6rem' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Badge>
                  </div>
                  <div>
                    <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                      89
                    </Typography>
                    <Typography textColor="primary.200">FAQs answered, see if yours is one of them.</Typography>
                  </div>
                </CardOverflow>

                <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                  <CardContent>
                    <Card
                      sx={{
                        '--Card-padding': '30px'
                      }}
                      variant="soft"
                    >
                      <Typography level="title-lg">Need Some Help?</Typography>
                      <Typography fontSize="sm" sx={{ mt: 0.5, mb: 4.5 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </Typography>

                      <Typography level="title-lg">Need Some Help?</Typography>
                      <Typography fontSize="sm" sx={{ mt: 0.5 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </Typography>
                    </Card>
                  </CardContent>
                </CardContent>
              </Card>
            </DialogContent>
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
};

export default TransitionModal;
