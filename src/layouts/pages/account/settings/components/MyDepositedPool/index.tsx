import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SalesTable from "examples/Tables/SalesTable";
import salesTableData from "layouts/dashboards/sales/data/salesTableData";
import { DataContext } from "context/DataContext";
import axios from "axios";
import { formatDate } from "utils/formateDate";
import { BASE_URL } from "config/config";
import { Grid, Typography, Avatar } from '@mui/material';

const MyDepositedPool = () => {
  const { userInfo } = useContext(DataContext);
  const [userDepositedPool, setUserDepositedPool] = useState([]);

  const getUserDeposites = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/pools/userDeposites/${userInfo?.userId}`
    );

    if (response?.data) {
      const poolInfoArray = response?.data?.map((i: any) => {
        const newItem = {
          Pool: i?.pool?.name,
          Amount: i?.amount,
          Date: formatDate(i?.createdAt),
        };
        return newItem;
      });

      setUserDepositedPool(poolInfoArray);
    }
  };

  useEffect(() => {
    getUserDeposites();
  }, []);

  interface PoolData {
    name: string;
    members: number;
    avatarUrl: string;
    initialDeposit: number;
    poolValue: number;
    poolBalance: number;
  }
  
  const poolData: PoolData = {
    name: 'DOSH-100',
    members: 20,
    avatarUrl: 'https://i.ibb.co/MPZzfnk/shaggy-bob-d87fb343763146f8bde67c4b6513b4b8.jpg', 
    initialDeposit: 375,
    poolValue: 7500,
    poolBalance: 7500,
  };

  return (
    <Card id="myDeposite" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">My Deposited Pool</MDTypography>
      </MDBox>

      <Box p={2}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3} display="flex" alignItems="center">
            <Avatar src={poolData.avatarUrl} alt={poolData.name} />
            <Box ml={2}>
              <Typography variant="h6">{poolData.name}</Typography>
              <Typography variant="h6">
                {poolData.members} Members
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Initial Deposit</Typography>
            <Typography variant="h6">${poolData.initialDeposit}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Pool Value</Typography>
            <Typography variant="h6">${poolData.poolValue}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Pool Balance</Typography>
            <Typography variant="h6">${poolData.poolBalance}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default MyDepositedPool;
