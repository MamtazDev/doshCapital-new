import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, TextField } from "@mui/material";
import Chip from "@mui/icons-material/SimCard";
import WifiIcon from "@mui/icons-material/Wifi";

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({ open, handleClose }) => {
  const [cardNumber, setCardNumber] = useState("4532 3100 9999 1049");
  const [expiryDate, setExpiryDate] = useState("00/00");
  const [cardHolderName, setCardHolderName] = useState("CARDHOLDER NAME");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 350,
            height: 200,
            backgroundColor: "#1c1c1c",
            borderRadius: "16px",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              BANK NAME
            </Typography>
            <Typography variant="body2">Credit Card</Typography>
          </Box>

          <Chip sx={{ fontSize: "2rem", color: "gold", transform: "rotate(90deg)" }} />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <TextField
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", fontSize: "1.25rem", letterSpacing: "2px" },
              }}
              sx={{ width: "80%" }}
            />
            <WifiIcon sx={{ fontSize: "1.5rem" }} />
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">6324</Typography>
            <Box textAlign="right">
              <Typography variant="body2">EXPIRES END</Typography>
              <TextField
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  style: { color: "#fff", fontSize: "1rem" },
                }}
              />
            </Box>
          </Box>

          <TextField
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { color: "#fff", fontSize: "1rem" },
            }}
            fullWidth
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default CreditCardModal;
