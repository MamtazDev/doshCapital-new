// @material-ui core components
import Grid from "@mui/material/Grid";
import contactImg from "../../../../../assets/images/Sydney.jpg";

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
      <Container>
        <MDBox
          sx={{
            backgroundImage: `url(${contactImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "50px",
            borderRadius: "30px",
          }}
        >
          <Grid container rowSpacing={"20px"}>
            <Grid md={6}>
              <MDBox sx={{ marginBottom: "40px" }}>
                <MDBox sx={{ paddingBottom: "20px" }}>
                  <MDTypography variant="h2" sx={{ paddingBottom: "10px" }}>
                    Get In Touch
                  </MDTypography>
                  <MDTypography variant="p" fontWeight="normal" color="secondary" fontSize="16px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.
                  </MDTypography>
                </MDBox>

                <MDBox sx={{ display: "flex", gap: "20px" }}>
                  <MDBox>
                    <AddLocationIcon color="white" />
                  </MDBox>

                  <MDBox>
                    <MDTypography variant="h5" sx={{ fontSize: "16px" }}>
                      Find us at the office
                    </MDTypography>
                    <MDTypography variant="p" color="secondary" sx={{ fontSize: "14px" }}>
                      Bld Mihail Kogainiceanu, nr, 8, 7652, <br /> Bucharest, <br /> Romania
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>

              <MDBox>
                <MDBox sx={{ display: "flex", gap: "20px" }}>
                  <MDBox>
                    <CallIcon color="white" />
                  </MDBox>

                  <MDBox>
                    <MDTypography variant="h5" sx={{ fontSize: "16px" }}>
                      Give us a ring
                    </MDTypography>
                    <MDTypography variant="p" color="secondary" sx={{ fontSize: "14px" }}>
                      Michel Jordan <br /> +40 762 321 762 <br /> Mon - Fri, 8:00 - 22:00
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Grid>

            <Grid md={6}>


              <ContactInfoForm/>

            </Grid>
          </Grid>
        </MDBox>
      </Container>
    </MDBox>
  );
}

export default ContactInfo;
