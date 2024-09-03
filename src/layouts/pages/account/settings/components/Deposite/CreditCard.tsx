import { Box, Grid, Modal, TextField, Typography } from '@mui/material';
import { CreditCard, Favorite, RingVolume } from '@mui/icons-material';
import MasterCard from 'examples/Cards/MasterCard';
import { useState } from 'react';
import {  InputAdornment  } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WifiIcon from '@mui/icons-material/Wifi';
import PaypalIcon from '@mui/icons-material'; // Use appropriate icon for PayPal
// import MasterCardIcon from '@mui/icons-material';
// import { MasterCardIcon } from '@mui/icons-material/MasterCard';

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
  number: string;
  holder: string;
  expires: string;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({ open, handleClose , number, holder, expires }) => {
  const [cardNumber, setCardNumber] = useState<string>(number);
  const [cardHolder, setCardHolder] = useState<string>(holder);
  const [cardExpires, setCardExpires] = useState<string>(expires);
  const [cvv, setCvv] = useState<string>("");
  return (
    <>
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
     <MasterCard
     number={4562112245947852}
     holder="jack peterson"
     expires="11/22"
   />
    <Box
      sx={{
        width: 350,
        height: 200,
        backgroundColor: '#333',
        borderRadius: '15px',
        padding: '20px',
        color: '#fff',
        backgroundImage: 'url("")', // Add background image here
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <WifiIcon sx={{ color: '#fff', fontSize: 20 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
            style: { color: '#fff' },
          }}
          inputProps={{ maxLength: 16 }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputBase-root': {
              '& input': { color: '#fff' },
            },
            width: '65%',
          }}
        />

        {/* <PaypalIcon sx={{ color: '#fff', fontSize: 40 }} /> */}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          label="Expires"
          value={cardExpires}
          onChange={(e) => setCardExpires(e.target.value)}
          variant="outlined"
          inputProps={{ maxLength: 5 }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputBase-root': {
              '& input': { color: '#fff' },
            },
            width: '45%',
          }}
        />

        <TextField
          label="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          variant="outlined"
          inputProps={{ maxLength: 3 }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputBase-root': {
              '& input': { color: '#fff' },
            },
            width: '45%',
          }}
        />
      </Box>

      <TextField
        label="Card Holder Name"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#fff' },
          },
          '& .MuiInputBase-root': {
            '& input': { color: '#fff' },
          },
          mt: 2,
        }}
      />

      {/* <MasterCardIcon sx={{ color: '#fff', fontSize: 40, alignSelf: 'flex-end' }} /> */}
    </Box>
    </>
    
  );
};

export default CreditCardModal;
