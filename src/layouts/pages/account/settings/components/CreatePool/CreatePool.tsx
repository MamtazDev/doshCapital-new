import React, { useContext, useState } from "react";
// @material-ui core components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// React TS components
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
  const [maxNumberPeople, setMaxNumberPeople] = useState<string>("20");

  const navigate = useNavigate();

  const handleMaxPeopleChange = (event: SelectChangeEvent<string>) => {
    const maxPeople = Number(event.target.value);
    setMaxNumberPeople(event.target.value);

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
    const maxNumberPeopleValue = Number(maxNumberPeople);
    const creatorInfo = userInfo?.userId;
    const data = {
      creatorInfo,
      name,
      amount,
      maxNumberPeople: maxNumberPeopleValue,
    };
    await axios.post(`${BASE_URL}/api/pools/add`, data);
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
            defaultValue="DOSH-000"
            required
          />
        </MDBox>

        <MDBox mb={2}>
          <FormControl fullWidth sx={{ height: "45px" }}>
            <InputLabel id="pool-amount-label">Pool Amount</InputLabel>
            <Select
              labelId="pool-amount-label"
              id="pool-amount"
              label="Pool Amount"
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
          <FormControl fullWidth sx={{ height: "45px" }}>
            <InputLabel id="max-people-label">Max Number People</InputLabel>
            <Select
              labelId="max-people-label"
              id="max-people"
              label="Max Number People"
              // value={maxNumberPeople}
              // onChange={handleMaxPeopleChange}
              sx={{ height: "100%" }}
            >
              <MenuItem value="5">0</MenuItem>
              <MenuItem value="5">20</MenuItem>
              {/* <MenuItem value="DOSH-0011">DOSH-0012</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0013</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0014</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0015</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0016</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0017</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0018</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-0019</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00110</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00111</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00112</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00113</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00114</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00115</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00116</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00117</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00118</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00119</MenuItem>
              <MenuItem value="DOSH-0011">DOSH-00120</MenuItem> */}
            </Select>
          </FormControl>
          {depositedAmount && (
            <Typography
              sx={{ textAlign: "end", fontSize: "12px", color: "green" }}
            >
              Per person can deposit ${depositedAmount}
            </Typography>
          )}
        </MDBox>
        <MDBox mb={2}>
          <FormControl fullWidth sx={{ height: "45px" }}>
            <InputLabel id="client-id">Client ID</InputLabel>
            <Select
              labelId="client-id"
              id="client-id"
              label="Client ID"
              value={maxNumberPeople}
              onChange={handleMaxPeopleChange}
              sx={{ height: "100%" }}
            >
              {[
                "D-001",
                "D-003",
                "D-002",
                "D-004",
                "D-005",
                "D-006",
                "D-007",
                "D-008",
                "D-009",
                "D-0010",
                "D-0011",
                "D-0012",
                "D-0013",
                "D-0014",
                "D-0015",
                "D-0016",
                "D-0017",
                "D-0018",
                "D-0019",
                "D-0020",
              ].map((data, index) => (
                <MenuItem key={index} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
