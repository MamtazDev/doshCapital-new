import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { CreditCard, Favorite, RingVolume } from "@mui/icons-material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { BASE_URL } from "config/config";
import axios from "axios";
import WifiIcon from "@mui/icons-material/Wifi";

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
  number: string;
  holder: string;
  expires: string;
  clientSecret: string;
  selectPoolName:any;
  formValues:any;
  selectedAmount:any;
}

const CARD_OPTIONS = {
  iconStyle: "solid", // or "default"
  style: {
    base: {
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: 400, // Moved inside 'base'
      width: "100%", // Moved inside 'base'
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#f00101",
    },
  },
};

// const CreditCardModal: React.FC<CreditCardModalProps> = ({formValues, open,selectPoolName,selectedAmount, clientSecret, handleClose, number, holder, expires }) => {
const CreditCardModal: React.FC<CreditCardModalProps> = ({
  open,
  formValues,
  selectPoolName,
  selectedAmount,
  clientSecret,
  handleClose,
  number,
  holder,
  expires,
}) => {
  const [cardNumber, setCardNumber] = useState<string>(number);
  const [cardHolder, setCardHolder] = useState<string>(holder);
  const [cardExpires, setCardExpires] = useState<string>(expires);
  const [cvv, setCvv] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const {firstName, phone , location} = formValues
  console.log("holder formValues", firstName, phone, location, formValues )
  

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    console.log("Submitted", { cardNumber, cardHolder, cardExpires, cvv });
    setIsLoading(true);

    if (!stripe) {
      console.log("Stripe not initialized");
      setIsLoading(false);
      return;
    }

    const pool = "DOSH-100";
    const amount = 200;

    try {
      // const clientSecret = await createPaymentIntent(amount * 100, "usd");
      // console.log("Client Secret:", clientSecret);

      const paymentResult = await confirmPayment(clientSecret);

      if (paymentResult.error) {
        handlePaymentError(paymentResult.error);
      } else if (paymentResult.paymentIntent?.status === "succeeded") {
        await handleSuccessfulPayment(pool, amount);
      }

      handleClose();
    } catch (error) {
      console.error("Error during payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmPayment = async (clientSecret: string) => {
    const cardElement = elements.getElement(CardNumberElement);

    return await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: "Dusty Achargy",
        },
      },
    });
  };

  const handlePaymentError = (error: any) => {
    console.error("Payment Error:", error);
  };

  const handleSuccessfulPayment = async (pool: string, amount: number) => {
    const paymentData = { pool, amount, selectPoolName, selectedAmount };

    const data = {
      phone,
      name: selectPoolName,
      amount: selectedAmount,
    };

    const response = await axios.post(`${BASE_URL}/api/deposite/payment`, data);

    if (response) {
      // const data = await response.json();
      console.log("Payment successful:", response);
    } else {
      console.error("Payment submission failed:", response.statusText);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 650,
          padding: 4,
          backgroundColor: "#333",
          borderRadius: "15px",
          color: "#fff",
          backgroundImage:
            'url("https://i.ibb.co/wwc07GQ/cq5dam-web-570-570.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <WifiIcon className="wifi_icon" />

        <Box sx={{ width: "60%" }}>
          <CardNumberElement
            options={{
              ...CARD_OPTIONS,
              placeholder: "Enter card number",
            }}
            className="payment_input"
          />
          <div className="flex-container">
            <CardExpiryElement
              options={{
                ...CARD_OPTIONS,
              }}
              className="payment_input_expire"
            />
            <CardCvcElement
              options={{
                ...CARD_OPTIONS,
              }}
              className="payment_input_cv"
            />
          </div>
        </Box>
        <div className="button-image-container" style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "40px" }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ width: "20%", padding: 1, alignSelf: "flex-start" }}
          >
            {isLoading ? "Processing.." : "Submit"}
          </Button>

          <div className="img-container">
            <img
              className="master_card"
              src="https://i.ibb.co/V2tnC45/mc-dla-symbol-92.png"
              alt="MasterCard"
            />
          </div>
        </div>
      </Box>
    </Modal>

    //  </Elements>
  );
};

export default CreditCardModal;

// export const STRIPE_SK: string =
//   "sk_test_51NFZaOLLDUmTZxUmmoNiB3NuGqC7qEXJXjHuwTAeboCeaYihKfwQXZQfJUMFHjDigF9pbV4dL05r4PoobuW6ATJR00GmJMXrQ8";

// const createPaymentIntent = async (amountInCents: Number, currency: String) => {
//   const stripe = Stripe(STRIPE_SK);
//   // console.log("stripe Intent:", stripe)
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountInCents,
//       currency: currency,
//     });

//     return paymentIntent.client_secret;
//   } catch (error) {
//     console.error("Error on createPayment intent", error);
//     throw new Error("Failed to create PaymentIntent");
//   }
// };

{
  /* <TextField
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
        /> */
}

{
  /* <CardNumberElement
          className="payment_input"
          options={{
            ...CARD_OPTIONS,
            placeholder: "Enter card number",
          }}
        />
        <div className="row mt-4">
          <div className="col-lg-6">
            <CardExpiryElement
              options={CARD_OPTIONS}
              className="payment_input"
            />
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="payment_card">
              <CardCvcElement
                options={CARD_OPTIONS}
                className="payment_input"
              />
            </div>
          </div>
        </div> */
}

// const handleSubmit = async () => {
//   console.log('Submitted', { cardNumber, cardHolder, cardExpires, cvv });
//   setIsLoading(true);
//   if (!stripe) {
//     console.log("no Stripe")
//     setIsLoading(false);
//     return;
//   }

//   let pool = "DOSH-100";
//   let amount = 200;

//   try {
//     // Define the data to be sent in the POST request

//     const clientSecret = await createPaymentIntent(
//       amount * 100,
//       "usd"
//     );

//     console.log("clientSecret", clientSecret)

//     const cardElement = elements.getElement(CardNumberElement);
//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: `Dusty Achargy`,
//             address: {
//               country: "USA",
//               // postal_code: 1206,
//             },
//           },
//         },
//       }
//     );

//     if (error) {
//       console.error("error", error);
//       setIsLoading(false);

//     } else if (paymentIntent.status === "succeeded") {
//       setIsLoading(false);

//       console.log(paymentIntent, "payyyy");

//       const createPaymentData = {
//         pool: "dfsdfsdf",
//         amount: amount,
//       };
//       const response = await fetch(`${BASE_URL}/api/deposite/payment`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(createPaymentData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Payment successful:', data);
//       } else {
//         console.error('Payment failed:', response.statusText);
//       }
//     }

//   } catch (error) {
//     console.error('Error during payment:', error);
//   }
// };
