import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import MDButton from "components/MDButton";

function BasicInfo({
  setFormComplete,
  setFormValues,
}: {
  setFormComplete: (isComplete: boolean) => void;
  setFormValues: (values: any) => void;
}): JSX.Element {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dob: "",
    days: "",
    location: "",
    year: "",
    number: "",
    language: "",
    skills: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    const isFormValid = formState.firstName && formState.lastName && formState.email;

    // If valid, pass the form values to the parent component
    if (isFormValid) {
      setFormValues(formState);
      setFormComplete(true);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Basic Info</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label="First Name"
              placeholder="Alec"
              value={formState.firstName}
              onChange={(e: any) =>
                setFormState({ ...formState, firstName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Last Name"
              placeholder="Thompson"
              value={formState.lastName}
              onChange={(e: any) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  value={formState.gender}
                  onChange={(event, newValue) =>
                    setFormState({ ...formState, gender: newValue })
                  }
                  options={selectData.gender}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Gender"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <Autocomplete
                      value={formState.dob}
                      onChange={(event, newValue) =>
                        setFormState({ ...formState, dob: newValue })
                      }
                      options={selectData.birthDate}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Month"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Autocomplete
                      value={formState.days}
                      onChange={(event, newValue) =>
                        setFormState({ ...formState, days: newValue })
                      }
                      options={selectData.days}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Day"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Autocomplete
                      value={formState.year}
                      onChange={(event, newValue) =>
                        setFormState({ ...formState, year: newValue })
                      }
                      options={selectData.years}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Year"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              label="Email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
              value={formState.email}
              onChange={(e: any) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              label="Phone Number"
              placeholder="+40 735 631 620"
              inputProps={{ type: "number" }}
              value={formState.number}
              onChange={(e: any) =>
                setFormState({ ...formState, number: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              label="Language"
              placeholder="English"
              value={formState.language}
              onChange={(e: any) =>
                setFormState({ ...formState, language: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Autocomplete
              multiple
              value={formState.skills}
              onChange={(event, newValue) =>
                setFormState({ ...formState, skills: newValue })
              }
              options={selectData.skills}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Skills"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <MDButton type="submit" variant="gradient" color="info" fullWidth>
              Submit
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BasicInfo;
