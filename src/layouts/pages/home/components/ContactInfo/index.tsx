// @material-ui core components
import Grid from "@mui/material/Grid";
import contactImg from "../../../../../assets/images/Sydney.jpg";

//  React TS components
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import { FormControl, Input } from "@mui/material";
// Data
import { Container } from "@mui/material";

function ContactInfo(): JSX.Element {
  return (
    <Container>
      {/* <MDBox p={3} mb={4}>
        <MDTypography align="center" variant="h2">
          Don&#39;t Miss out
        </MDTypography>
      </MDBox> */}

      {/* <MDBox component="form" pb={3} sx={{ px: { xs: 4, lg: 20 } }} mb={10}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="Name" placeholder="Alec" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />{" "}
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="standard-textarea"
              label="Your Message"
              placeholder="Message"
              multiline
              variant="standard"
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="end">
          <MDBox mt={4}>
            <MDButton variant="outlined" color="dark" size="large">
              Submit
            </MDButton>
          </MDBox>
        </Grid>
      </MDBox> */}

      <MDBox
        sx={{
          backgroundImage: `url(${contactImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "50px",
          borderRadius: "30px",
        }}
      >
        <Grid container>
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
            {/* bgColor="white" */}
            <MDBox
              bgColor="white"
              sx={{ maxWidth: "420px", width: "100%", padding: "20px", borderRadius: "15px" }}
            >
              <MDBox bgColor="#A13BB6" textAlign={"center"} padding={"10px"} marginTop={"-50px"}>
                <MDTypography variant="h3">Contact us</MDTypography>
              </MDBox>
              <MDBox paddingTop={"30px"}>
                <MDBox
                  sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
                  marginBottom={"30px"}
                >
                  <FormControl>
                    <Input id="fname" placeholder="First Name" />
                  </FormControl>

                  <FormControl>
                    <Input id="lname" placeholder="Last Name" />
                  </FormControl>
                </MDBox>

                <MDBox marginBottom={"30px"}>
                  <FormControl sx={{ display: "flex", gap: "20px" }}>
                    <Input id="email" type="email" placeholder="Email" />
                  </FormControl>
                </MDBox>
                <FormControl>
                  <Input id="ymessage" placeholder="Your Message" />
                </FormControl>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Container>
  );
}

export default ContactInfo;
