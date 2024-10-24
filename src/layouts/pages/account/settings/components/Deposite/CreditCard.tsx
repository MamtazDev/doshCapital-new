import WifiIcon from "@mui/icons-material/Wifi";
import { Box, Modal } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeCardNumberElementOptions } from "@stripe/stripe-js";
import axios from "axios";
import MDButton from "components/MDButton";
import { BASE_URL } from "config/config";
import { useState } from "react";
import LogoImg from "../../../../../../assets/images/logo.png";
import mastercard from "../../../../../../assets/images/logos/mastercard.png";
import pattern from "../../../../../../assets/images/shapes/pattern.svg";

interface CreditCardModalProps {
  open: boolean;
  handleClose: () => void;
  number: string;
  holder: string;
  expires: string;
  clientSecret: string;
  selectPoolName: any;
  formValues: any;
  selectedAmount: any;
}

const CARD_OPTIONS: StripeCardNumberElementOptions = {
  iconStyle: "solid", // or "default"
  style: {
    base: {
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: 400, // Moved inside 'base'
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#f00101",
    },
  },
};

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

  const { firstName, phone, location } = formValues;
  console.log("holder formValues", firstName, phone, location, formValues);

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
        await handleSuccessfulPayment(formValues);
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

  const handleSuccessfulPayment = async (formValues: any) => {
    const paymentData = { selectPoolName, selectedAmount };

    const data = {
      formValues: formValues,
      name: selectPoolName,
      amount: selectedAmount,
    };
    console.log("data", data);
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
          width: "100%",
          maxWidth: 550,
          padding: {
            xs: 1,
            lg: 4,
          },
          paddingLeft: {
            xs: "8px",
            md: "70px",
          },
          backgroundColor: "#333",
          borderRadius: "15px",
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          overflow: "hidden",
          overflowX: "auto",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${pattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            zIndex: 0,
          },
          zIndex: 1,
        }}
      >
        <Box width="100%">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <div style={{ width: "100%" }}>
                <WifiIcon className="wifi_icon" />
              </div>
              <Box marginBottom={1}>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    opacity: "0.8",
                  }}
                >
                  Card Holder
                </label>
                <input
                  className="card_holder_input"
                  type="text"
                  placeholder=""
                />
              </Box>
              <Box marginBottom={1}>
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    opacity: "0.8",
                  }}
                >
                  Card Number
                </label>
                <CardNumberElement
                  options={{
                    ...CARD_OPTIONS,
                    placeholder: "",
                  }}
                  className="payment_input"
                />
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "end",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "end",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <label
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "400",
                          opacity: "0.8",
                        }}
                      >
                        Expires
                      </label>
                      <CardExpiryElement
                        options={{
                          ...CARD_OPTIONS,
                          placeholder: "",
                        }}
                        className="payment_input_expire"
                      />
                    </Box>
                    <Box>
                      <label
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "400",
                          opacity: "0.8",
                        }}
                      >
                        CVV
                      </label>
                      <CardCvcElement
                        options={{
                          ...CARD_OPTIONS,
                          placeholder: "",
                        }}
                        className="payment_input_cv"
                      />
                    </Box>
                  </Box>

                  <Box marginLeft="25px">
                    <MDButton
                      onClick={handleSubmit}
                      variant="contained"
                      color="info"
                      sx={{
                        // width: "25%",

                        padding: {
                          xs: "2px 10px",
                          md: "4px 20px",
                        },
                        marginTop: "8px",
                        alignSelf: "flex-start",
                        color: "white",
                      }}
                    >
                      {isLoading ? "Processing.." : "Submit"}
                    </MDButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: {
                    xs: "10px",
                    lg: "30px",
                  },
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img width={50} src={LogoImg} alt="" />
                </div>
                <MDButton
                  variant="contained"
                  color="info"
                  sx={{
                    width: "20%",
                    height: "64px",
                    padding: "4px",
                    alignSelf: "flex-end",
                    color: "white",
                    // marginBottom: "35px",
                  }}
                >
                  <img
                    width={15}
                    src="https://static-00.iconduck.com/assets.00/paypal-icon-1735x2048-7umw9cq7.png"
                    alt=""
                  />
                </MDButton>

                <img
                  className="master_card"
                  width={61}
                  src={mastercard}
                  alt="MasterCard"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreditCardModal;
