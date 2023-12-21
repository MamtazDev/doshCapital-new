import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  TextareaAutosize,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

function ContactInfoForm() {
  return (
    <MDBox
      bgColor="white"
      marginTop={"50px"}
      sx={{ maxWidth: "420px", width: "100%", padding: "20px", borderRadius: "15px" }}
    >
      <MDBox bgColor="#A13BB6" textAlign={"center"} padding={"10px"} marginTop={"-50px"}>
        <MDTypography variant="h3">Contact us</MDTypography>
      </MDBox>

      <MDBox paddingTop={"30px"} marginBottom={"30px"}>
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

        <MDBox marginBottom={"30px"}>
          <FormControl sx={{ display: "flex", gap: "20px" }}>
            <Input id="textArea" type="text" placeholder="Your Message" />
          </FormControl>
        </MDBox>

        <FormControl>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Your Message"
          ></TextareaAutosize>
        </FormControl>
      </MDBox>

      <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
        <MDBox>
          <FormControlLabel control={<Checkbox />} color="green" label="I am not a robot" />
        </MDBox>

        <MDBox>
          <Button variant="contained">Send Message</Button>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default ContactInfoForm;
