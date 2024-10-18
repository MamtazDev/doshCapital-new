// MyDepositedPool.tsx
import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { DataContext } from "context/DataContext";
import axios from "axios";
import { formatDate } from "utils/formateDate";
import { BASE_URL } from "config/config";
import { Grid } from "@mui/material";
import TableData from "./TableData";
import dataTableData from "./DataTableData";

const MyDepositedPool = () => {
  const { userInfo } = useContext(DataContext);
  const [userDepositedPool, setUserDepositedPool] = useState([]);

  const getUserDeposites = async () => {
    try {
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
        console.log("userDepositedPool", userDepositedPool);
      }
    } catch (error) {
      console.error("Error fetching user deposits:", error);
    }
  };

  useEffect(() => {
    getUserDeposites();
    console.log("userInfo?.userId", userInfo?.userId);
  }, [userInfo?.userId]);

  return (
    <Card id="myDeposite" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">My Deposited Pool</MDTypography>
      </MDBox>

      <Box p={2}>
        <Grid spacing={2}>
          <Grid item xs={12}>
            <Box p={2}>
              <TableData
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
                noEndBorder
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default MyDepositedPool;
