// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../../../../assets/images/footer-logo.png";

//  React TS components
import { Container } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import BottomNavbar from "examples/Navbars/HomeNavbar/BottomNavbar";

function Footer(): JSX.Element {
  return (
    <MDBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={10} lg={3} container>
            <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              {/* <MDTypography
                component="a"
                href="#"
                variant="h3"
                fontWeight="regular"
                color="secondary"
              >
                Dosh Capital Investment
              </MDTypography> */}
              <img width={200} src={logo} alt="" />
            </MDBox>
          </Grid>
          <Grid item xs={10} lg={3} container>
            <MDBox
              display="flex"
              flexDirection="column"
              justifyContent="start"
              flexWrap="wrap"
              mb={3}
            >
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="h5"
                  fontWeight="regular"
                  color="secondary"
                >
                  Dosh Capital
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Privacy Policy
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Terms of conditions
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 0, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Testimonials
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Affiliates
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} lg={3} container justifyContent="start">
            <MDBox
              display="flex"
              flexDirection="column"
              justifyContent="start"
              flexWrap="wrap"
              mb={3}
            >
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                  <MDTypography
                    component="a"
                    href="#"
                    variant="h5"
                    fontWeight="regular"
                    color="secondary"
                  >
                    Customer
                  </MDTypography>
                </MDBox>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  How to trade FX
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Knowledge Base
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 0, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Video Tutorials
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  FAQ&#39;s
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} lg={3} container justifyContent="start">
            <MDBox
              display="flex"
              flexDirection="column"
              justifyContent="start"
              flexWrap="wrap"
              mb={3}
            >
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="h5"
                  fontWeight="regular"
                  color="secondary"
                >
                  Performance
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Preferred Brokers
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Useful Links
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 0, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Forex Essentials
                </MDTypography>
              </MDBox>
              <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="regular"
                  color="secondary"
                >
                  Product
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid item xs={12} lg={8}>
            <MDBox display="flex" justifyContent="center" mt={1} mb={3}>
              <MDBox mr={3} color="secondary">
                <FacebookIcon fontSize="small" />
              </MDBox>
              <MDBox mr={3} color="secondary">
                <TwitterIcon fontSize="small" />
              </MDBox>
              <MDBox mr={3} color="secondary">
                <InstagramIcon fontSize="small" />
              </MDBox>
              <MDBox mr={3} color="secondary">
                <PinterestIcon fontSize="small" />
              </MDBox>
              <MDBox color="secondary">
                <LinkedInIcon fontSize="small" />
              </MDBox>
            </MDBox>
          </Grid>

          <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
            <MDTypography variant="body2" color="secondary">
              Dosh Capital Investment, Australia.
            </MDTypography>
            <MDTypography variant="body2" color="secondary">
              Copyright &copy; All Rights Reserved.
            </MDTypography>
          </Grid>
        </MDBox>
      </Container>
    </MDBox>
  );
}

export default Footer;
