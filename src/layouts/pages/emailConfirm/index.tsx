/* eslint-disable prettier/prettier */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
const EamilConfirm = () => {
    return (
      <MDBox
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MDTypography varient="h6">
          page Your email is confirmed. <Link to={"/"}>Click</Link> here to go
          to the homepage.
        </MDTypography>
      </MDBox>
    );
};

export default EamilConfirm;
