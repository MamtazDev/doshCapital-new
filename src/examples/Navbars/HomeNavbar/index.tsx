/* eslint-disable no-param-reassign */
import { ReactNode, useEffect, useRef, useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow, { GrowProps } from "@mui/material/Grow";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS examples components
import HomeNavbarDropdown from "examples/Navbars/HomeNavbar/HomeNavbarDropdown";
import HomeNavbarMobile from "examples/Navbars/HomeNavbar/HomeNavbarMobile";

//  React TS Base Styles
import breakpoints from "assets/theme/base/breakpoints";

//  React context
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import doshLogo from "assets/images/DoshLogo.png";
import colors from "assets/theme/base/colors";
import MDInput from "components/MDInput";
import { setOpenConfigurator, useMaterialUIController } from "context";
import { navbarIconButton } from "../DashboardNavbar/styles";
// import rgba from "../../../assets/theme/functions/rgba";

// Declaring props types for HomeNavbar
interface Props {
  routes: {
    [key: string]:
      | ReactNode
      | string
      | {
          [key: string]: string | any;
        }[];
  }[];
  brand?: string;
  transparent?: boolean;
  light?: boolean;
  action?: {
    type: "external" | "internal";
    route: string;
    color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "dark"
      | "light";
    label: string;
    icon: any;
  };
}

interface NewGrowTypes extends GrowProps {
  sx: any;
  [key: string]: any;
}

function NewGrow(props: NewGrowTypes) {
  return <Grow {...props} />;
}

function HomeNavbar({
  routes,
  brand,
  transparent,
  light,
  action,
}: Props): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode, openConfigurator } = controller;
  const { white } = colors;
  const [dropdown, setDropdown] = useState<any>("");
  const [dropdownEl, setDropdownEl] = useState<any>("");
  const [dropdownName, setDropdownName] = useState<any>("");
  const [nestedDropdown, setNestedDropdown] = useState<any>("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState<any>("");
  const [nestedDropdownName, setNestedDropdownName] = useState<any>("");
  const [arrowRef, setArrowRef] = useState<any>(null);
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(false);
  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /**
     The event listener that's calling the displayMobileNavbar function when
     resizing the window.
    */

    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }: any) => (
      <HomeNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        collapse={false}
        onMouseEnter={({ currentTarget }: any) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && setDropdown(null)}
        light={light}
      />
    )
  );

  const navRef = useRef(null);

  useEffect(() => {
    function handleScroll(e: any) {
      if (window.scrollY > 100) {
        navRef.current.style.backgroundColor = `black`;
        // navRef.current.style.borderRadius = `20px`;
        // navRef.current.style.width = `98.1%`;
        // navRef.current.style.marginLeft = `16px`;
      } else {
        navRef.current.style.backdropFilter = `none`;
        navRef.current.style.backgroundColor = `transparent`;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MDBox
        ref={navRef}
        py={1}
        // px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        px={2}
        width="calc(100%)"
        // shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        left={0}
        zIndex={3}
        sx={{ transition: `backdrop-filter .25s` }}
      >
        {/* ({
          palette: { transparent: transparentColor, brandDark, background },
          functions: { rgba },
        }: any) => ({
          backgroundColor: transparentColor.main,
        }) */}
        <Container>
          <MDBox mt={4}>
            <Grid
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <MDBox
                component={Link}
                to="/"
                // py={transparent ? 1.5 : 0.75}
                lineHeight={1}
                pl={{ xs: 0, lg: 1 }}
                flex={1}
              >
                <img
                  src={doshLogo}
                  alt="logo of doshcapital"
                  width={mobileView ? "300" : "300"}
                />
              </MDBox>
              <MDBox
                color="inherit"
                display={{ xs: "none", lg: "flex" }}
                m={0}
                p={0}
              >
                {renderNavbarItems}
              </MDBox>
              {!mobileView && (
                <MDBox display="flex">
                  <MDBox pr={1}>
                    <MDInput label="Search here " />
                  </MDBox>
                  <IconButton sx={navbarIconButton} size="small" disableRipple>
                    <Icon sx={{ color: grey[50] }}>account_circle</Icon>
                  </IconButton>
                  <IconButton
                    onClick={handleConfiguratorOpen}
                    sx={navbarIconButton}
                    size="small"
                    disableRipple
                  >
                    <Icon sx={{ color: grey[50] }}>settings</Icon>
                  </IconButton>
                  <IconButton sx={navbarIconButton} size="small" disableRipple>
                    <Icon sx={{ color: grey[50] }}>notifications</Icon>
                  </IconButton>
                </MDBox>
              )}
              <MDBox
                display={{ xs: "inline-block", lg: "none" }}
                lineHeight={0}
                py={1.5}
                pl={1.5}
                color="inherit"
                sx={{ cursor: "pointer" }}
                onClick={openMobileNavbar}
              >
                <MDTypography sx={{ color: "#8e6c1f", fontWeight: "bold" }}>
                  {/* menu open */}
                  {mobileNavbar ? "X" : <Icon>menu</Icon>}
                </MDTypography>
                {mobileView && (
                  <HomeNavbarMobile routes={routes} open={mobileNavbar} />
                )}
              </MDBox>
            </Grid>
          </MDBox>
        </Container>
      </MDBox>
    </>
  );
}

// Declaring default props for HomeNavbar
HomeNavbar.defaultProps = {
  brand: "Dosh Capital Investment",
  transparent: false,
  light: false,
  action: false,
};

export default HomeNavbar;
