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
  TextField,
} from "@mui/material";

const poolAmountMap: { [key: string]: string } = {
  "DOSH-000": "7500",
  "DOSH-100": "15000",
  "DOSH-200": "20000",
};

const CreatePool = ({ isMember }: { isMember: Boolean }) => {
  const { userInfo, selectedUser, setSelectedUser } = useContext(DataContext);
  const [depositedAmount, setDepositedAmount] = useState<string | null>(null);
  const [poolAmount, setPoolAmount] = useState<string>("");
  const [poolName, setPoolName] = useState<string>("");
  const [maxNumberPeople, setMaxNumberPeople] = useState<string | any>("20");

  const navigate = useNavigate();

  const handleMaxPeopleChange = (event: SelectChangeEvent<string>) => {
    const maxPeople = Number(event.target.value);
    setMaxNumberPeople(maxPeople);
    setSelectedUser(maxPeople);
    // if (!maxPeople || !poolAmount) {
    //   setDepositedAmount(null);
    //   return;
    // }
    // const amountOfDeposite = (Number(poolAmount) / maxPeople).toFixed(2);
    // setDepositedAmount(amountOfDeposite);
  };

  const [selectedAmount, setSelectedAmount] = useState<any>(null);

  const handlePoolAmountChange = (event: SelectChangeEvent<string>) => {
    setPoolAmount(event.target.value);
  };

  const handlePoolNameChange = (event: SelectChangeEvent<string>) => {
    const selectedPool = event.target.value;
    const amountOfDeposite = (
      Number(poolAmountMap[selectedPool]) / selectedUser
    ).toFixed(2);

    setDepositedAmount(amountOfDeposite);

    setPoolName(selectedPool);
    setSelectedAmount(poolAmountMap[selectedPool] || "");
    setPoolAmount(poolAmountMap[selectedPool] || "");
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.target as HTMLFormElement;
  //   const name = form?.name?.value;
  //   const amount = Number(poolAmount);
  //   const maxNumberPeopleValue = Number(maxNumberPeople);
  //   const creatorInfo = userInfo?.userId;
  //   const data = {
  //     creatorInfo,
  //     name,
  //     amount,
  //     maxNumberPeople: maxNumberPeopleValue,
  //   };
  //   await axios.post(`${BASE_URL}/api/pools/add`, data);
  //   navigate("/dashboards/portfolio");
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Explicitly cast form.name as HTMLInputElement
    const name = (form.name as unknown as HTMLInputElement).value;
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
    <Card
      id={`${!isMember ? "create-pool" : "pool-members"}`}
      sx={{ overflow: "visible" }}
    >
      <MDBox p={3}>
        <MDTypography variant="h5">
          {isMember ? "Pool Members" : "Create Pool"}
        </MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3} onSubmit={() => handleSubmit}>
        {!isMember && (
          <MDBox mb={2}>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Pool Name"
            />
          </MDBox>
        )}

        {isMember && (
          <>
            <MDBox mb={2}>
              <FormControl fullWidth sx={{ height: "45px" }}>
                <InputLabel id="pool-name">Pool Name</InputLabel>
                <Select
                  labelId="pool-name"
                  id="pool-name"
                  label="Pool name"
                  value={poolName}
                  onChange={handlePoolNameChange}
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
                fullWidth
                id="outlined-read-only-input"
                label="Pool Amount"
                value={selectedAmount ? `${selectedAmount} $` : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </MDBox>
          </>
        )}

        {!isMember && (
          <>
            <MDBox mb={2}>
              <FormControl fullWidth sx={{ height: "45px" }}>
                <InputLabel id="pool-amount">Pool Amount</InputLabel>
                <Select
                  labelId="pool-amount"
                  id="pool-name"
                  label="Pool Amount"
                  onChange={handlePoolAmountChange}
                  sx={{ height: "100%" }}
                >
                  <MenuItem value="7500">$7500</MenuItem>
                  <MenuItem value="15000">$15000</MenuItem>
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
                  value={maxNumberPeople}
                  onChange={handleMaxPeopleChange}
                  sx={{ height: "100%" }}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="20">20</MenuItem>
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
          </>
        )}

        {isMember && (
          <>
            <MDBox mb={2}>
              <FormControl fullWidth sx={{ height: "45px" }}>
                <InputLabel id="client-id">Client ID</InputLabel>
                <Select
                  labelId="client-id"
                  id="client-id"
                  label="Client ID"
                  // value={maxNumberPeople}
                  // onChange={handleMaxPeopleChange}
                  sx={{ height: "100%" }}
                >
                  {[
                    "D-001",
                    "D-002",
                    "D-003",
                    "D-004",
                    "D-005",
                    "D-006",
                    "D-007",
                    "D-008",
                    "D-009",
                    "D-010",
                    "D-011",
                    "D-012",
                    "D-013",
                    "D-014",
                    "D-015",
                    "D-016",
                    "D-017",
                    "D-018",
                    "D-019",
                    "D-020",
                  ].map((data, index) => (
                    <MenuItem key={index} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MDBox>
            <MDBox mb={2}>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Member Amount"
                value={selectedAmount ? `${depositedAmount}$` : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </MDBox>
          </>
        )}

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
