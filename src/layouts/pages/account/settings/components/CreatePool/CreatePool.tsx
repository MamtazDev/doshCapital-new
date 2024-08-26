import React, { useContext, useState } from "react";
// @material-ui core components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { DataContext } from "context/DataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "config/config";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

const CreatePool = () => {
  const { userInfo } = useContext(DataContext);
  const [depositedAmount, setDepositedAmount] = useState<string | null>(null);
  const [poolAmount, setPoolAmount] = useState<string>("");

  const navigate = useNavigate();

  const handleMaxPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPeople = Number(e.target.value);

    if (!maxPeople || !poolAmount) {
      setDepositedAmount(null);
      return;
    }

    const amountOfDeposite = (Number(poolAmount) / maxPeople).toFixed(2);
    setDepositedAmount(amountOfDeposite);
  };

  const handlePoolAmountChange = (event: SelectChangeEvent<string>) => {
    setPoolAmount(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.name.value;
    const amount = Number(poolAmount);
    const maxNumberPeople = Number(form.maxNumberPeople.value);
    const creatorInfo = userInfo?.userId;
    const data = {
      creatorInfo,
      name,
      amount,
      maxNumberPeople,
    };
    const res = await axios.post(`${BASE_URL}/api/pools/add`, data);
    navigate("/dashboards/portfolio");
  };

  return (
    <Card id="create-pool" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Create Pool</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3} onSubmit={handleSubmit}>
        <MDBox mb={2}>
          <MDInput
            type="text"
            label="Pool Name"
            fullWidth
            name="name"
            defaultValue="DOSH-0011"
            required
          />
        </MDBox>
        <MDBox mb={2}>
          <FormControl fullWidth sx={{ height: "45px" }}>
            <InputLabel id="demo-simple-select-label">Pool Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="amount"
              value={poolAmount}
              onChange={handlePoolAmountChange} 
              sx={{ height: "100%" }}
            >
              <MenuItem value="7500">$7,500</MenuItem>
              <MenuItem value="15000">$15,000</MenuItem>
            </Select>
          </FormControl>
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            type="number"
            label="Max Number People"
            fullWidth
            name="maxNumberPeople"
            required
            onChange={handleMaxPeopleChange}
          />
          {depositedAmount && (
            <Typography
              sx={{ textAlign: "end", fontSize: "12px", color: "green" }}
            >
              Per person can deposit ${depositedAmount}
            </Typography>
          )}
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton
            size="small"
            variant="gradient"
            color="info"
            fullWidth
            type="submit"
          >
            Create
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default CreatePool;
