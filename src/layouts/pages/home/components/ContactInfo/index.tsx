/* eslint-disable prettier/prettier */
// @material-ui core components
import Grid from "@mui/material/Grid";
import contactImg from "../../../../../assets/images/contact-bg.jpg";

//  React TS components
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
// Data
import { Container } from "@mui/material";
import ContactInfoForm from "../ContactInfoForm";

function ContactInfo(): JSX.Element {
  return (
    <MDBox
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-40px",
        position: "relative",
        zIndex: "60",
      }}
    >
      <MDBox paddingBottom={"50px"} sx={{ width: { lg: "70%" } }}>
        <MDBox
          sx={{
            backgroundImage: `url(${contactImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "50px 0",
            backgroundBlendMode: "overlay",
            backgroundColor: "#373232",
            borderRadius: "20px",
          }}
        >
          <Container>
            <Grid container rowSpacing={"20px"} sx={{ paddingLeft: "75px" }} alignItems={"center"}>
              <Grid md={6}>
                <MDBox sx={{ paddingLeft: "50px" }}>
                  <MDBox sx={{ paddingBottom: "20px" }} mt={4}>
                    <MDTypography
                      variant="h2"
                      color="white"
                      // sx={{ paddingBottom: "5px" }}
                    >
                      Get In Touch
                    </MDTypography>
                    <MDTypography
                      variant="p"
                      fontWeight="normal"
                      sx={{ color: "#A6A6A6" }}
                      fontSize="14px"
                    >
                      You need more information? Check what other persons are
                      saying <br />
                      about our product. They are very happy with their
                      purchase.
                    </MDTypography>
                  </MDBox>

                  <MDBox sx={{ display: "flex", gap: "10px" }}>
                    <MDBox mt={1}>
                      <AddLocationIcon
                        style={{ color: "white" }}
                        fontSize="medium"
                      />
                    </MDBox>

                    <MDBox>
                      <MDTypography variant="h4" color="white">
                        Find us at the office
                      </MDTypography>
                      <MDTypography
                        variant="p"
                        sx={{ fontSize: "13px", color: "#A6A6A6" }}
                      >
                        Bld Mihail Kogainiceanu, nr, 8, 7652, <br /> Bucharest,{" "}
                        <br /> Romania
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
                <MDBox mt={3} sx={{ paddingLeft: "50px" }}>
                  <MDBox sx={{ display: "flex", gap: "10px" }}>
                    <MDBox mt={1}>
                      <CallIcon style={{ color: "white" }} fontSize="medium" />
                    </MDBox>

                    <MDBox>
                      <MDTypography variant="h4" color="white">
                        Give us a ring
                      </MDTypography>
                      <MDTypography
                        variant="p"
                        color="secondary"
                        sx={{ fontSize: "13px", color: "#A6A6A6" }}
                      >
                        Michel Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                        8:00 - 22:00
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Grid>

              <Grid md={6} sx={{ paddingLeft: "75px" }}>
                <ContactInfoForm />
              </Grid>
            </Grid>
          </Container>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default ContactInfo;
