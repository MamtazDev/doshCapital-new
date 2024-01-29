import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";

/* eslint-disable prettier/prettier */
const BottomNavbar = () => {
  return (
    <MDBox
      sx={{
        position: "fixed",
        backgroundColor: "green",
        bottom: "0",
        zIndex: "99",
        width: "100%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        padding: "10px",
      }}
    >
      <MDBox>
        <Link to={"/marketplace"}>
          <MDTypography sx={{fontSize: "12px"}}>Marketplace</MDTypography>
        </Link>
        <Link to={"/dashboards/portfolio"}>
          <MDTypography sx={{fontSize: "12px"}}>Dashboard</MDTypography>
        </Link>
        <Link to={"/about"}>
          <MDTypography sx={{fontSize: "12px"}}>About</MDTypography>
        </Link>
      </MDBox>
    </MDBox>
  );
};

export default BottomNavbar;
