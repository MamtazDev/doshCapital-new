/* eslint-disable prettier/prettier */
import emailjs from "@emailjs/browser";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useRef } from "react";
import Swal from "sweetalert2";

function ContactInfoForm() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form is not defined.");
      return;
    }

    const emailInput = form.current.querySelector('input[name="user_email"]');

    if (!emailInput || !emailInput.value) {
      Swal.fire("Please provide your email");
      return;
    }

    emailjs
      .sendForm(
        // serviceID
        "service_r3l1m8c",
        // templateID
        "template_cnwma4l",
        form.current,
        // public Key
        "I02wa_bvgVYL4ZndX"
      )
      .then(
        (result: any) => {
          Swal.fire("Please Check Your Mail");
          form.current.reset();
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MDBox
      bgColor="white"
      marginTop={"50px"}
      sx={{
        maxWidth: "420px",
        width: "100%",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <MDBox
        bgColor="#A13BB6"
        textAlign={"center"}
        padding={"25px"}
        borderRadius="5px"
        marginTop={"-50px"}
        shadow="xl"
      >
        <MDTypography variant="h6" sx={{ color: "white" }}>
          Contact us
        </MDTypography>
      </MDBox>

      <form ref={form} onSubmit={sendEmail}>
        <FormGroup ref={form} onSubmit={sendEmail}>
          <MDBox paddingTop={"30px"} marginBottom={"30px"}>
            <MDBox
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
              marginBottom={"30px"}
            >
              <FormControl>
                <TextField
                  id="standard-basic"
                  name="user_name"
                  label="First Name"
                  variant="standard"
                />
              </FormControl>

              <FormControl>
                <TextField
                  id="standard-basic"
                  name="from_name"
                  label="Last Name"
                  variant="standard"
                />
              </FormControl>
            </MDBox>

            <MDBox marginBottom={"30px"}>
              <FormControl sx={{ display: "flex", gap: "20px" }}>
                <TextField
                  id="standard-basic"
                  name="user_email"
                  label="Email Address"
                  variant="standard"
                />
              </FormControl>
            </MDBox>

            <FormControl>
              <MDBox>
                <TextField
                  fullWidth
                  name="message"
                  id="standard-basic"
                  label="Your Message"
                  variant="standard"
                  color="secondary"
                  multiline
                  rows={6}
                />
              </MDBox>
            </FormControl>
          </MDBox>

          <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
            <MDBox>
              <FormControlLabel
                control={<Checkbox />}
                label="I am not a robot"
              />
            </MDBox>

            <MDBox>
              <Button type="submit" value="Send" variant="contained">
                Send Message
              </Button>
            </MDBox>
          </MDBox>
        </FormGroup>
      </form>
    </MDBox>
  );
}

export default ContactInfoForm;
