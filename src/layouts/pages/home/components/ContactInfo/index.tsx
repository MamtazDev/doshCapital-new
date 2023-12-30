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
    <MDBox paddingBottom={"50px"}>
      <MDBox
        sx={{
          backgroundImage: `url(${contactImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "100px 0",
          backgroundBlendMode: "overlay",
          backgroundColor: "#373232",
        }}
      >
        <Container>
          <Grid container rowSpacing={"20px"}>
            <Grid md={6}>
              <MDBox sx={{ marginBottom: "40px" }}>
                <MDBox sx={{ paddingBottom: "20px" }}>
                  <MDTypography variant="h1" sx={{ paddingBottom: "10px" }}>
                    Get In Touch
                  </MDTypography>
                  <MDTypography
                    variant="p"
                    fontWeight="normal"
                    sx={{ color: "#A6A6A6" }}
                    fontSize="16px"
                  >
                    You need more information? Check what other persons are
                    saying about our product. They are very happy with their
                    purchase.
                  </MDTypography>
                </MDBox>

                <MDBox sx={{ display: "flex", gap: "20px" }}>
                  <MDBox mt={1}>
                    <AddLocationIcon
                      style={{ color: "white" }}
                      fontSize="large"
                    />
                  </MDBox>

                  <MDBox>
                    <MDTypography variant="h3">
                      Find us at the office
                    </MDTypography>
                    <MDTypography
                      variant="p"
                      sx={{ fontSize: "16px", color: "#A6A6A6" }}
                    >
                      Bld Mihail Kogainiceanu, nr, 8, 7652, <br /> Bucharest,{" "}
                      <br /> Romania
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
              <MDBox>
                <MDBox sx={{ display: "flex", gap: "20px" }}>
                  <MDBox mt={1}>
                    <CallIcon style={{ color: "white" }} fontSize="large" />
                  </MDBox>

                  <MDBox>
                    <MDTypography variant="h3">Give us a ring</MDTypography>
                    <MDTypography
                      variant="p"
                      color="secondary"
                      sx={{ fontSize: "16px", color: "#A6A6A6" }}
                    >
                      Michel Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                      8:00 - 22:00
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Grid>

            <Grid md={6}>
              <ContactInfoForm />
            </Grid>
          </Grid>
        </Container>
      </MDBox>
    </MDBox>
  );
}

export default ContactInfo;
