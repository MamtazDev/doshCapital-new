import { useContext, useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

//  React TS components
import MDBadgeDot from "components/MDBadgeDot";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

//  React TS examples components
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import SalesTable from "examples/Tables/SalesTable";

// Sales dashboard components
import ChannelsChart from "layouts/dashboards/portfolio/components/ChannelsChart";

// Data
import axios from "axios";
import { BASE_URL } from "config/config";
import { DataContext } from "context/DataContext";
import dataTableData from "layouts/dashboards/portfolio/data/dataTableData";
import horizontalBarChartData from "layouts/dashboards/portfolio/data/horizontalBarChartData";
import DefaultCard from "./components/DefaultCard/DefaultCard";
import defaultLineChartData from "./data/defaultLineChartData";
import one from "assets/images/number-icon/one.png";
import two from "assets/images/number-icon/two.png";
import three from "assets/images/number-icon/three.png";
import four from "assets/images/number-icon/four.png";
import five from "assets/images/number-icon/five.png";

const handleIcon = (index: number) => {
  switch (index) {
    case 0:
      return one;
    case 1:
      return two;
    case 2:
      return three;
    case 3:
      return four;
    case 4:
      return five;

    default:
      return;
  }
};

function Portfolio(): JSX.Element {
  // DefaultStatisticsCard state for the dropdown value
  const [salesDropdownValue, setSalesDropdownValue] =
    useState<string>("6 May - 7 May");
  const [customersDropdownValue, setCustomersDropdownValue] =
    useState<string>("6 May - 7 May");
  const [revenueDropdownValue, setRevenueDropdownValue] =
    useState<string>("6 May - 7 May");

  // DefaultStatisticsCard state for the dropdown action
  const [salesDropdown, setSalesDropdown] = useState<string | null>(null);
  const [customersDropdown, setCustomersDropdown] = useState<string | null>(
    null
  );
  const [revenueDropdown, setRevenueDropdown] = useState<string | null>(null);

  // DefaultStatisticsCard handler for the dropdown action
  const openSalesDropdown = ({ currentTarget }: any) =>
    setSalesDropdown(currentTarget);
  const closeSalesDropdown = ({ currentTarget }: any) => {
    setSalesDropdown(null);
    setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openCustomersDropdown = ({ currentTarget }: any) =>
    setCustomersDropdown(currentTarget);
  const closeCustomersDropdown = ({ currentTarget }: any) => {
    setCustomersDropdown(null);
    setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openRevenueDropdown = ({ currentTarget }: any) =>
    setRevenueDropdown(currentTarget);
  const closeRevenueDropdown = ({ currentTarget }: any) => {
    setRevenueDropdown(null);
    setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
  };

  // Dropdown menu template for the DefaultStatisticsCard
  const renderMenu = (state: any, close: any) => (
    <Menu
      anchorEl={state}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
      disableAutoFocusItem
    >
      <MenuItem onClick={close}>Last 7 days</MenuItem>
      <MenuItem onClick={close}>Last week</MenuItem>
      <MenuItem onClick={close}>Last 30 days</MenuItem>
    </Menu>
  );

  const { userInfo } = useContext(DataContext);

  const [userDepositesData, setUserDepositesData] = useState([]);

  const getUserDeposites = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/pools/userDeposites/${userInfo?.userId}`
    );
    setUserDepositesData(response?.data);
  };

  console.log(userDepositesData, "usss");

  const handleBounce = (maxNumberPeople: any, depositedPeoples: any) => {
    const bounce = `${(
      (depositedPeoples?.length / maxNumberPeople) *
      100
    ).toFixed(2)}%`;
    return bounce;
  };

  const handleAccountBalance = (depositedPeoples: any) => {
    const totalBalance = depositedPeoples.reduce(
      (total: any, balance: any) => total + balance.amount,
      0
    );
    return totalBalance;
  };

  const [pools, setPools] = useState<any>([]);
  const [poolsTableData, setPoolsTableData] = useState<any>([]);
  console.log(poolsTableData, "dfdfsfksfj");

  const getAllPools = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/pools/`);
      if (response?.data) {
        console.log(response?.data, "pools");
        const poolsData = response?.data.map((item: any, idx: number) => {
          console.log(item, "i");
          const newItem = {
            // [`${item?.name}`]: `Members - ${item?.maxNumberPeople}`,
            [`Dosh-00${idx + 1}`]: [
              handleIcon(idx),
              `Members - ${item?.maxNumberPeople}`,
            ],
            amount: item?.amount,
            "Acc. Balance": handleAccountBalance(item?.depositedPeoples),
          };
          return newItem;
        });
        setPools(poolsData.slice(0, 5));

        const poolTableAmount = response?.data?.map((item: any) => item.amount);
        const poolName = response?.data?.map((item: any) => item.name);
        const accountBalance = response?.data?.map((item: any) =>
          handleAccountBalance(item?.depositedPeoples)
        );

        const newData = {
          labels: poolName,
          datasets: [
            {
              label: "Pools",
              color: "info",
              data: poolTableAmount,
            },
            {
              label: "Acc. Balance ",
              color: "dark",
              data: accountBalance,
            },
          ],
        };

        setPoolsTableData(newData);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error?.message);
    }
  };

  useEffect(() => {
    getAllPools();
    getUserDeposites();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              {/* <DefaultStatisticsCard
                title="Initial Investment"
                count="$230,220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openSalesDropdown,
                  menu: renderMenu(salesDropdown, closeSalesDropdown),
                  value: salesDropdownValue,
                }}
              /> */}

              <DefaultCard
                title="YTD Investment"
                count={`$${
                  userDepositesData[userDepositesData?.length - 1]?.amount
                    ? userDepositesData[userDepositesData?.length - 1]?.amount
                    : 10
                }`}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openSalesDropdown,
                  menu: renderMenu(salesDropdown, closeSalesDropdown),
                  value: salesDropdownValue,
                }}
                title2={"Monthly Investment"}
                count2={"$200"}
                button={false}
                belowText={false}
                buttonVarient={"inherit"}
                percentage2={{
                  color: "success",
                  value: "$200",
                  label: " Initial Investment",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultCard
                title="Account Balance"
                count={`$${userDepositesData?.reduce(
                  (total, item) => total + item?.amount,
                  10
                )}`}
                percentage={{
                  color: "success",
                  value: "+12%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openSalesDropdown,
                  menu: renderMenu(salesDropdown, closeSalesDropdown),
                  value: salesDropdownValue,
                }}
                title2={"YTD Withdrawals"}
                count2={"$2,000"}
                button={true}
                belowText={false}
                buttonVarient={"info"}
                percentage2={{
                  color: "success",
                  value: "$126",
                  label: " Contributions",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultCard
                title="Profit Earnings"
                count="$1,200"
                percentage={{
                  color: "secondary",
                  value: "+213%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openSalesDropdown,
                  menu: renderMenu(salesDropdown, closeSalesDropdown),
                  value: salesDropdownValue,
                }}
                title2={"Avg. Revenue"}
                count2={"$1,200"}
                button={true}
                belowText={true}
                buttonVarient={"success"}
                percentage2={{
                  color: "success",
                  value: "$126",
                  label: " Contributions",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <ChannelsChart />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <DefaultLineChart
                title="Pool Revenue"
                description={
                  <MDBox display="flex" justifyContent="space-between">
                    <MDBox display="flex" ml={-1}>
                      <MDBadgeDot
                        color="info"
                        size="sm"
                        badgeContent="Do$h Capital"
                      />
                      <MDBadgeDot
                        color="dark"
                        size="sm"
                        badgeContent="Others"
                      />
                    </MDBox>
                    <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
                      <MDBox
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <MDTypography>Dosh-001</MDTypography>
                        <Tooltip
                          title="See which ads perform better"
                          placement="left"
                          arrow
                        >
                          <MDButton
                            variant="outlined"
                            color="secondary"
                            size="small"
                            circular
                            iconOnly
                          >
                            <Icon>priority_high</Icon>
                          </MDButton>
                        </Tooltip>
                      </MDBox>
                    </MDBox>
                  </MDBox>
                }
                // chart={poolsTableData}
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <HorizontalBarChart
                title="Break Down by Growth"
                chart={horizontalBarChartData}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <SalesTable title="Pool Revenue by Name" rows={pools} />
              {/* <SalesTable title="Sales by Country" rows={salesTableData} /> */}
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <MDTypography variant="h6" fontWeight="medium">
                  Top Selling Products
                </MDTypography>
              </MDBox>
              <MDBox py={1}>
                <DataTable
                  table={dataTableData}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Portfolio;
