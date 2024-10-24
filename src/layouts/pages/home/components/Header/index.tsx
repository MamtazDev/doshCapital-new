/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { ReactNode, useRef, useState } from "react";
import "../../../../../fonts/Felixti.TTF";
import "./index.css";
// @mui material components
import Grid from "@mui/material/Grid";

//  React TS components
import EastIcon from "@mui/icons-material/East";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS examples components

//  React page layout routes
import pageRoutes from "page.routes";

// Images
import { Box, Modal } from "@mui/material";
import { Container } from "@mui/system";
import homeBgThree from "assets/images/bg_img.png";
import homeBgFour from "assets/images/dosh/drake_new.png";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import ContactInfoForm from "../ContactInfoForm";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  const [mobileView, setMobileView] = useState(false);
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [childopen, setchildOpen] = useState(false);
  const childhandleOpen = () => setchildOpen(true);
  const childhandleClose = () => setchildOpen(false);
  const childModal = () => {
    childhandleOpen();
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 490,
    bgcolor: "transparant",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <HomeNavbar routes={pageRoutes} />
      <MDBox position="relative" sx={{ position: "relative", height: "100vh" }}>
        <MDBox sx={{ position: "relative", height: "100vh" }}>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
              // borderRadius:"30px"
            }}
          ></MDBox>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="flex-end"
              sx={{
                position: "relative",
                zIndex: "1",
                py: 22,
                textAlign: "left",
              }}
            >
              <Grid item xs={12} lg={6} mt={5} sx={{ px: { xs: 4, lg: 0 } }}>
                <MDBox mb={0} mt={mobileView ? 6 : 6}>
                  <MDTypography
                    className="cross"
                    sx={{ fontSize: "10px", color: "#A6A6A6" }}
                    align="right"
                  >
                    CROSSOVER TO WHAT WE DO <EastIcon />
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography
                    variant="h2"
                    color="white"
                    fontWeight="bold"
                    align="right"
                    // style={{ fontFamily: "felix-titling-regular" }}
                    sx={{
                      fontFamily: "felix-titling-regular",
                      fontSize: { xs: "26px", sm: "28px", md: "2.25rem" },
                    }}
                    // className="home_text"
                  >
                    AUTOMATED TRADING
                  </MDTypography>
                  <MDTypography
                    variant="h2"
                    color="white"
                    fontWeight="bold"
                    align="right"
                    style={{ fontFamily: "felix-titling-regular" }}
                    className="home_text"
                  >
                    NETWORKING
                  </MDTypography>
                  <MDTypography
                    variant="h2"
                    color="white"
                    fontWeight="bold"
                    align="right"
                    style={{ fontFamily: "felix-titling-regular" }}
                    className="home_text"
                  >
                    DO$HCOIN
                  </MDTypography>
                </MDBox>
                <MDBox mt={4} mb={2}>
                  <MDTypography
                    variant="body2"
                    sx={{ fontSize: "14px", color: "#A6A6A6" }}
                    fontWeight="light"
                    align="right"
                    style={{ fontFamily: "footlight-mt-light-regular" }}
                  >
                    How do you Win a losing trade in Forex?
                  </MDTypography>
                  <MDTypography
                    variant="body2"
                    sx={{ fontSize: "14px", color: "#A6A6A6" }}
                    fontWeight="light"
                    align="right"
                    style={{ fontFamily: "footlight-mt-light-regular" }}
                  >
                    And, how do we do it…while we sleep?
                  </MDTypography>
                  <MDBox display="flex" justifyContent={"flex-end"} mt={2}>
                    <br />
                    <button
                      onClick={() => setOpen(true)}
                      style={{
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "15px",
                        border: "none",
                        backgroundColor: "#247DEA",
                        color: "white",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      Tell Me More <EastIcon />
                    </button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                    >
                      {/* <Fade in={open}> */}
                      <Box sx={style}>
                        <ContactInfoForm />
                      </Box>
                      {/* </Fade> */}
                    </Modal>
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </Container>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              // width: "100%",
              // height: "100vh",
              zIndex: "-1",
            }}
          >
            <img className="homebg" src={homeBgFour} alt="home background" />
            <img
              className="homebgThree"
              src={homeBgThree}
              alt="home background"
            />

            {/* <video
              ref={videoRef}
              style={{ width: "100%" }}
              autoPlay={true}
              loop
              muted
              src={video}
            ></video> */}
          </MDBox>
        </MDBox>
      </MDBox>
      <Grid container sx={{ px: 6, m: 8 }}>
        <Grid item xs={12}>
          <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto"></MDBox>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
