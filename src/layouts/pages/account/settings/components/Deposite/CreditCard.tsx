import { Box, Modal, TextField, Button } from '@mui/material';
import { CreditCard } from '@mui/icons-material';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
  number: string;
  holder: string;
  expires: string;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({ open, handleClose, number, holder, expires }) => {
  const [cardNumber, setCardNumber] = useState<string>(number);
  const [cardHolder, setCardHolder] = useState<string>(holder);
  const [cardExpires, setCardExpires] = useState<string>(expires);
  const [cvv, setCvv] = useState<string>("");

  const handleSubmit = () => {
    console.log('Submitted', { cardNumber, cardHolder, cardExpires, cvv });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 500, // Increase the width of the modal
          // height: '100%', // Ensure the height is full
          padding: 4,
          backgroundColor: '#333',
          borderRadius: '15px',
          color: '#fff',
          backgroundImage: 'url("https://i.ibb.co/pjgpFPb/freudenstadt-20000-sdb-d2c853-preview-800x782.png")',
          backgroundSize: 'cover', // Cover the entire modal
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <TextField
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          variant="outlined"
          placeholder="Card Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCard sx={{ color: '#fff' }} />
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
            marginBottom: 2,
            width: '100%',
          }}
        />

        <Box sx={{ display: 'flex',justifyContent:'space-between', width: '100%', mb: 2 }}>
          <TextField
            label="Expires"
            value={cardExpires}
            onChange={(e) => setCardExpires(e.target.value)}
            variant="outlined"
            placeholder="MM/YY"
            inputProps={{ maxLength: 5 }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#fff' },
              },
              '& .MuiInputBase-root': {
                '& input': { color: '#fff' },
              },
              width: '48%',
            }}
          />

          <TextField
            label="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            variant="outlined"
            placeholder="CVV"
            inputProps={{ maxLength: 3 }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#fff' },
              },
              '& .MuiInputBase-root': {
                '& input': { color: '#fff' },
              },
              width: '48%',
            }}
          />
        </Box>

        <TextField
          label="Card Holder Name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          variant="outlined"
          placeholder="Card Holder Name"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputBase-root': {
              '& input': { color: '#fff' },
            },
            marginBottom: 3,
            width: '100%',
          }}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ width: '100%', padding: 1 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CreditCardModal;







