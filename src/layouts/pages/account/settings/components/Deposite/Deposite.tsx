import React, { useContext, useEffect, useState } from "react";
// @material-ui core components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { DataContext } from "context/DataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "components/Payment/PaymentForm";
import { Typography } from "@mui/material";
import { BASE_URL } from "config/config";
import CreditCardModal from "../Deposite/CreditCard";
import Stripe from "stripe";

interface DepositProps {
  isFormComplete: boolean;
  formValues: any;
}

const Deposite = ({ isFormComplete, formValues }: DepositProps) => {
  const { userInfo } = useContext(DataContext);

  const stripePromise = loadStripe(
    "pk_test_51OrZZ9GnuZvG4pKcUUbLCMULIiDFBypjTuGwjxScfrFJptzcmsXQ5lnW8vhy48Ax666eI3BlbrVmmtn1exUWpY6H00DFiccuQr"
  );

  const [allPools, setAllPools] = useState([]);
  const [selectPoolName, setSelectPoolName] = useState("DOSH-000");
  const [selectedPoolInfo, setSelectedPoolInfo] = useState<any>(null);
  const [selectedAmount, setSelectedAmount] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const poolAmountMap: { [key: string]: string } = {
    "DOSH-000": "100",
    "DOSH-100": "200",
    "DOSH-200": "300",
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelectPoolName(event.target.value as string);

  //   const filteredPool = allPools?.find((i) => i.name === event.target.value);
  //   setSelectedPoolInfo(filteredPool);
  //   const amount = (
  //     filteredPool?.amount / filteredPool?.maxNumberPeople
  //   ).toFixed(2);
  //   setSelectedAmount(amount);
  // };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedPool = event.target.value;
    setSelectPoolName(selectedPool);
    setSelectedAmount(poolAmountMap[selectedPool] || "");
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const amount = selectedAmount;
    const depositor = userInfo?.userId;
    const pool = selectedPoolInfo?._id;

    const data = {
      depositor,
      pool,
      amount,
    };

    const res = await axios.post(`${BASE_URL}/api/deposite/add`, data);
    if (res?.data?.status === 200) {
      navigate("/dashboards/portfolio");
    }
    console.log(res, "ress");
  };

  const getAllPools = async () => {
    const res = await axios.get(`${BASE_URL}/api/pools`);
    setAllPools(res?.data);
  };

  useEffect(() => {
    getAllPools();
  }, []);

  const handleClickOpen = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch(`${BASE_URL}/api/deposite/createIntend`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     // Add any data required by your backend here
      //     amount: 2000, // Example: amount in cents
      //     currency: "usd", // Example: currency code
      //   }),
      // });
      const response: any = await axios.post(
        `${BASE_URL}/api/deposite/createIntend`
      );

      const clientSecret = response.data.client_secret;
      console.log("clientSecret", response.data);

      setClientSecret(clientSecret);
      if (clientSecret) {
        setOpen(true);
      }

      console.log("GenerateClientSecret from deposit", clientSecret);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching client secret:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* {show all data is comming perfectly} */}
      <Card id="deposite" sx={{ overflow: "visible" }}>
        <MDBox p={3}>
          <MDTypography variant="h5">Deposit</MDTypography>
        </MDBox>
        {/* <MDBox component="form" pb={3} px={3} onSubmit={handleSubmit}> */}

        <Box
          sx={{
            pb: 3,
            px: 3,
          }}
        >
          <MDBox mb={2}>
            <FormControl fullWidth sx={{ height: "45px" }}>
              <InputLabel id="demo-simple-select-label">Select Pool</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-selec"
                // label="demo-simple-selec"
                // value={selectPoolName}
                // onChange={handleChange}
                // sx={{ height: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Pool"
                value={selectPoolName}
                onChange={handleChange}
                sx={{ height: "100%" }}
              >
                <MenuItem value="DOSH-000">DOSH-000</MenuItem>
                <MenuItem value="DOSH-100">DOSH-100</MenuItem>
                <MenuItem value="DOSH-200">DOSH-200</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <TextField
              // fullWidth
              // id="outlined-read-only-input"
              // label=""
              // value={selectedAmount ? `${selectedAmount} $` : ""}
              // InputProps={{
              //   readOnly: true,
              // }}
              fullWidth
              id="outlined-read-only-input"
              label=""
              value={selectedAmount ? `${selectedAmount} $` : ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </MDBox>

          {/* <MDBox mt={4} mb={1}>
            <MDButton
              size="small"
              variant="gradient"
              color="info"
              fullWidth
              type="button"
              onClick={handleClickOpen}
              disabled={!selectedPoolInfo}
            >
              Deposit
            </MDButton>
          </MDBox> */}
          <MDBox mt={4} mb={1}>
            <MDButton
              size="small"
              variant="gradient"
              color="info"
              fullWidth
              type="button"
              onClick={handleClickOpen}
              // disabled={!isFormComplete} // open this after desining
              disabled={!selectedAmount}
            >
              {!isLoading ? "Deposit" : "Processing.."}
            </MDButton>
          </MDBox>

          {clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CreditCardModal
                formValues={formValues}
                selectPoolName={selectPoolName}
                selectedAmount={selectedAmount}
                clientSecret={clientSecret}
                open={open}
                handleClose={handleClose}
                number={""}
                holder={""}
                expires={""}
              />
            </Elements>
          )}
        </Box>
      </Card>
    </>
  );
};

export default Deposite;

// const STRIPE_SK: string =
//   "sk_test_51NFZaOLLDUmTZxUmmoNiB3NuGqC7qEXJXjHuwTAeboCeaYihKfwQXZQfJUMFHjDigF9pbV4dL05r4PoobuW6ATJR00GmJMXrQ8";

// const createPaymentIntent = async (amountInCents: Number, currency: String) => {
//   // const stripe = new Stripe(STRIPE_SK);
//   const stripe = new Stripe(STRIPE_SK);
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
