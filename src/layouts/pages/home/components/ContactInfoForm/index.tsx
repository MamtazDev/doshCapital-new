import emailjs from "@emailjs/browser";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  TextField
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
        "service_boywpgq",
        "template_lg16gys",
        form.current,
        "SX1ijRCETYeQPBAv8"
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
        borderRadius: "15px",
      }}
    >
      <MDBox
        bgColor="#A13BB6"
        textAlign={"center"}
        padding={"10px"}
        marginTop={"-50px"}
      >
        <MDTypography variant="h3">Contact us</MDTypography>
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
                {/* <Input id="fname" placeholder="First Name" name="user_name" /> */}
                <TextField
                  id="standard-basic"
                  name="user_name"
                  label="First Name"
                  variant="standard"
                />
              </FormControl>

              <FormControl>
                {/* <Input id="lname" placeholder="Last Name" /> */}
                <TextField
                  id="standard-basic"
                  name="last_name"
                  label="Last Name"
                  variant="standard"
                />
              </FormControl>
            </MDBox>

            <MDBox marginBottom={"30px"}>
              <FormControl sx={{ display: "flex", gap: "20px" }}>
                {/* <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="user_email"
                /> */}
                <TextField
                  id="standard-basic"
                  name="user_email"
                  label="Last Name"
                  variant="standard"
                />
              </FormControl>
            </MDBox>

            <FormControl>
              {/* <TextareaAutosize
                id="message"
                name="message"
                aria-label="minimum height"
                minRows={5}
                placeholder="Your Message"
              ></TextareaAutosize> */}

              <TextField
                id="standard-basic"
                label="description"
                variant="standard"
                color="secondary"
              />
            </FormControl>
          </MDBox>

          <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
            <MDBox>
              <FormControlLabel
                control={<Checkbox />}
                color="green"
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
