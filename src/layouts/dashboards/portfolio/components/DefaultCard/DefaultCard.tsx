/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { ReactNode } from "react";

// @mui material components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS contexts
import { useMaterialUIController } from "context";

// Declaring prop types for DefaultStatisticsCard
interface Props {
  title: string;
  title2: string;
  count: string | number;
  count2: string | number;
  button: boolean;
  belowText: boolean;
  buttonVarient:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  percentage?: {
    color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "dark"
      | "white";
    value: string | number;
    label: string;
  };
  dropdown?: {
    action: (...args: any) => void;
    menu: ReactNode;
    value: string;
  };
  [key: string]: any;
}

function DefaultCard({
  title,
  count,
  percentage,
  percentage2,
  title2,
  count2,
  button,
  buttonVarient,
  dropdown,
  belowText,
}: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card>
      <MDBox p={2}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <MDBox mb={0.5} lineHeight={1}>
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
                textAlign="left"
              >
                {title}
              </MDTypography>
            </MDBox>
            <MDBox lineHeight={1}>
              {button ? (
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    display: "block",
                    padding: "0 30px",
                    fontSize: "18px",
                    textAlign: "right",
                    backgroundColor: `${
                      buttonVarient === "success" && "#70ad47"
                    }`,
                  }}
                >
                  {count}
                </Button>
              ) : (
                <MDTypography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontSize: "16px", padding: "4px", textAlign: "left" }}
                >
                  {count}
                </MDTypography>
              )}
              <MDTypography
                variant="button"
                fontWeight="bold"
                color={percentage.color}
                //  sx={{fontSize:"10px"}}
              >
                {percentage.value}&nbsp;
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={darkMode ? "text" : "secondary"}
                  // sx={{fontSize:"10px"}}
                >
                  {percentage.label}
                </MDTypography>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item>
            <MDBox mb={0.5} lineHeight={1} sx={{textAlign: "right"}}>
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
                textAlign="right"
              >
                {title2}
              </MDTypography>
            </MDBox>
            <MDBox lineHeight={1}>
              <MDTypography
                variant="h5"
                fontWeight="bold"
                textAlign="right"
                sx={{ fontSize: "16px", padding: "4px", }}
              >
                {count2}
              </MDTypography>
            </MDBox>
            {/* {belowText && (
              <MDTypography variant="button" fontWeight="bold" color={percentage.color}>
                {percentage.value}&nbsp;
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={darkMode ? "text" : "secondary"}
                >
                  {percentage.label}
                </MDTypography>
              </MDTypography>
            )} */}
            <MDBox lineHeight={1}>
              {/* {button ? (
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    display: "block",
                    backgroundColor: `${buttonVarient === "success" && "#70ad47"}`,
                  }}
                >
                  {count}
                </Button>
              ) :  */}
              {/* ( */}
              <MDTypography
                variant="h5"
                fontWeight="bold"
                //  sx={{fontSize:"16px"}}
              >
                {/* {count} */}
              </MDTypography>
              {/* ) */}
              {/* } */}
              <MDTypography
                variant="button"
                fontWeight="bold"
                color={percentage2.color}
                //  sx={{fontSize:"10px"}}
              >
                {percentage2.value}
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={darkMode ? "text" : "secondary"}
                  // sx={{fontSize:"10px"}}
                >
                  {percentage2.label}
                </MDTypography>
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}
// dustyarcher@yahoo.com
// Setting default values for the props of DefaultStatisticsCard
DefaultCard.defaultProps = {
  percentage: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

export default DefaultCard;
