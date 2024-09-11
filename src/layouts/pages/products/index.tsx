import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

//  React TS examples components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Project page components
import Header from "layouts/pages/profile/components/Header";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import team5 from "assets/images/team-5.jpg";
// import Chaser from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoInvision from "assets/images/small-logos/logo-invision.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import { useMaterialUIController } from "context";
import { botsData } from "data/bots";
import ComplexProductCard from "examples/Cards/ProductCards/ComplexProductCard";
import { Container } from "@mui/material";

function Products(): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  const initalData = botsData;
  const [bots, setBots] = useState([]);
  useEffect(() => {
    if (darkMode) {
      setBots(initalData.filter((bot) => bot.theme === "dark"));
    } else {
      setBots(initalData.filter((bot) => bot.theme === "light"));
    }
  }, [darkMode]);

  // ComplexProductCard dropdown menu state
  // const [slackBotMenu, setSlackBotMenu] = useState(null);
  // const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  // const [designToolsMenu, setDesignToolsMenu] = useState(null);
  // const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  // const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  // const openSlackBotMenu = (event: any) => setSlackBotMenu(event.currentTarget);
  // const closeSlackBotMenu = () => setSlackBotMenu(null);
  // const openPremiumSupportMenu = (event: any) => setPremiumSupportMenu(event.currentTarget);
  // const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  // const openDesignToolsMenu = (event: any) => setDesignToolsMenu(event.currentTarget);
  // const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  // const openLookingGreatMenu = (event: any) => setLookingGreatMenu(event.currentTarget);
  // const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  // const openDeveloperFirstMenu = (event: any) => setDeveloperFirstMenu(event.currentTarget);
  // const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

  // Dropdown menu template for the ComplexProductCard
  // const renderMenu = (state: any, close: any) => (
  //   <Menu
  //     anchorEl={state}
  //     anchorOrigin={{ vertical: "top", horizontal: "left" }}
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={Boolean(state)}
  //     onClose={close}
  //     keepMounted
  //   >
  //     <MenuItem onClick={close}>Action</MenuItem>
  //     <MenuItem onClick={close}>Another action</MenuItem>
  //     <MenuItem onClick={close}>Something else here</MenuItem>
  //   </Menu>
  // );

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar light absolute />
      </MDBox> */}
      <Header />
      <MDBox pb={3} px={3}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={7}>
              <MDBox mb={1}>
                <MDTypography variant="h5">
                  Some of Our Awesome Products
                </MDTypography>
              </MDBox>
              <MDBox mb={2}>
                <MDTypography variant="body2" color="text" textAlign="justify">
                  Stay ahead of the game with the advancement of my AI, “what
                  humans call Artificial”, we will soon have my Trading Robots
                  analysing the markets, trading using Knowledge Fusion, Logical
                  Algorithms & Data Science, placing trades for you, while you
                  sleep!
                </MDTypography>
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
              <MDButton variant="gradient" color="info">
                <Icon>add</Icon>&nbsp; Add New
              </MDButton>
            </Grid> */}
          </Grid>
        </Container>
        <MDBox mt={5}>
          <Grid container spacing={3}>
            {bots.map((product) => (
              <Grid key={product.title} item xs={12} md={4} lg={3}>
                <MDBox mb={1.5} mt={1.5}>
                  <ComplexProductCard
                    image={product.image}
                    title={product.title}
                    description="I do about 500 trades a year across 4 currency pairs. I will give you a 97% return on your investment and will do it while you sleep... I am the Chaser"
                    theme={product.theme}
                  />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Products;
