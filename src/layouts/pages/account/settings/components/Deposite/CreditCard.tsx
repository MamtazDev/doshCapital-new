import { Box, Grid, Modal, TextField, Typography } from '@mui/material';
import { CreditCard, Favorite, RingVolume } from '@mui/icons-material';

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: '#2b2b2b',
          color: 'white',
          backgroundImage: 'url(/path/to/tree-texture.png)', // Replace with your texture image path
          backgroundSize: 'cover',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Favorite sx={{ position: 'absolute', top: 16, right: 16, fontSize: 32 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Card Number
        </Typography>

        <Grid container spacing={1}>
          {[1, 2, 3, 4].map((_, index) => (
            <Grid item xs={3} key={index}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="XXXX"
                InputProps={{
                  style: {
                    color: 'white',
                    backgroundColor: '#444',
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Expires
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="MM/YY"
              InputProps={{
                style: {
                  color: 'white',
                  backgroundColor: '#444',
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              CVV
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="XXX"
              InputProps={{
                style: {
                  color: 'white',
                  backgroundColor: '#444',
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Card Holder Name
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="John Doe"
          InputProps={{
            style: {
              color: 'white',
              backgroundColor: '#444',
              borderRadius: 2,
            },
          }}
        />
      </Box>
    </Modal>
  );
};

export default CreditCardModal;
