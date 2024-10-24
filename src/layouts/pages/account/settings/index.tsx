// @mui material components
import Grid from "@mui/material/Grid";

//  React TS components
import MDBox from "components/MDBox";

// Settings page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import Sidenav from "layouts/pages/account/settings/components/Sidenav";
import Header from "layouts/pages/account/settings/components/Header";
import BasicInfo from "layouts/pages/account/settings/components/BasicInfo";
import ChangePassword from "layouts/pages/account/settings/components/ChangePassword";
import Authentication from "layouts/pages/account/settings/components/Authentication";
import Accounts from "layouts/pages/account/settings/components/Accounts";
import Notifications from "layouts/pages/account/settings/components/Notifications";
import Sessions from "layouts/pages/account/settings/components/Sessions";
import DeleteAccount from "layouts/pages/account/settings/components/DeleteAccount";
import CreatePool from "./components/CreatePool/CreatePool";
import Deposite from "./components/Deposite/Deposite";
import MyDepositedPool from "./components/MyDepositedPool";
import { useState } from "react";

function Settings(): JSX.Element {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dob: "",
    location: "",
    number: "",
    language: "",
    skills: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  return (
    <BaseLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <CreatePool isMember={false} />
                </Grid>
                {/* deposite components */}
                <Grid item xs={12}>
                  <Deposite
                    isFormComplete={isFormComplete}
                    formValues={formValues}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CreatePool isMember={true} />
                </Grid>

                <Grid item xs={12}>
                  <MyDepositedPool />
                </Grid>

                {/* basicinfo components */}
                <Grid item xs={12}>
                  <BasicInfo
                    setFormValues={setFormValues}
                    setFormComplete={setIsFormComplete}
                  />
                </Grid>

                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                <Grid item xs={12}>
                  <Authentication />
                </Grid>
                {/* <Grid item xs={12}>
                  <Accounts />
                </Grid>
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                <Grid item xs={12}>
                  <Sessions />
                </Grid> */}
                <Grid item xs={12}>
                  <DeleteAccount />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Settings;
