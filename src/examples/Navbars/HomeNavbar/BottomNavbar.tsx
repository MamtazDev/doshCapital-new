import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import ProfileImg from "../../../assets/images/bottom_nav_item.png";
import MobileHome from "../../../assets/images/mobile-btn.png";

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
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        padding: "20px 20px 10px",
        background: "linear-gradient(104deg, #2B2B2B 0%, #0D0D0D 100%)",
      }}
    >
      <MDBox
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/marketplace"} style={{ textAlign: "center" }}>
          <StorefrontIcon color={"secondary"} fontSize={"small"} />
          <MDTypography sx={{ fontSize: "12px", color: "#8C8C8C" }}>
            Marketplace
          </MDTypography>
        </Link>

        <Link to={"/social"} style={{ textAlign: "center" }}>
          <ConnectWithoutContactIcon color={"secondary"} fontSize={"small"} />
          <MDTypography sx={{ fontSize: "12px", color: "#8C8C8C" }}>
            Social
          </MDTypography>
        </Link>

        <MDBox
          sx={{
            textAlign: "center",
            width: "100px",
            height: "100px",
            marginTop: "-100px",
            borderRadius: "50%",
          }}
        >
          <Link to={"/"} style={{ textAlign: "center" }}>
            <MDBox>
              <img
                style={{ width: "100%", height: "100%" }}
                src={MobileHome}
                alt="home-icon"
              />
            </MDBox>
            <MDTypography sx={{ fontSize: "12px", color: "#8C8C8C" }}>
              Dosh
            </MDTypography>
          </Link>
        </MDBox>
        <Link to={"/dashboards/portfolio"} style={{ textAlign: "center" }}>
          <HomeIcon color={"secondary"} fontSize={"small"} />
          <MDTypography sx={{ fontSize: "12px", color: "#8C8C8C" }}>
            Dashboard
          </MDTypography>
        </Link>
        <Link to={"/about"} style={{ textAlign: "center" }}>
          <img src={ProfileImg} alt="profile-img" />
          <MDTypography sx={{ fontSize: "12px", color: "#8C8C8C" }}>
            Profile
          </MDTypography>
        </Link>
      </MDBox>
    </MDBox>
  );
};

export default BottomNavbar;
