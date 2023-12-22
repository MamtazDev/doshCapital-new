import emailjs from "@emailjs/browser";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  TextareaAutosize
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useRef } from "react";
import Swal from "sweetalert2";

function ContactInfoForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate email before sending
    const emailInput = form.current.querySelector('input[name="user_email"]');
    if (!emailInput.value) {
      Swal.fire("Please provide your email");
      return;
    }

    emailjs.sendForm("service_boywpgq", "template_lg16gys", form.current, "SX1ijRCETYeQPBAv8").then(
      (result) => {
        Swal.fire("Please Check Your Mail");
        form.current.reset(); // Clear the form after successful submission
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <MDBox
      bgColor="white"
      marginTop={"50px"}
      sx={{ maxWidth: "420px", width: "100%", padding: "20px", borderRadius: "15px" }}
    >
      <MDBox bgColor="#A13BB6" textAlign={"center"} padding={"10px"} marginTop={"-50px"}>
        <MDTypography variant="h3">Contact us</MDTypography>
      </MDBox>

      <form ref={form} onSubmit={sendEmail}>
        <FormGroup ref={form} onSubmit={sendEmail}>
          <MDBox paddingTop={"30px"} marginBottom={"30px"}>
            <MDBox
              sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
              marginBottom={"30px"}
            >
              <FormControl>
                <Input id="fname" placeholder="First Name" name="user_name" />
              </FormControl>

              <FormControl>
                <Input id="lname" placeholder="Last Name" />
              </FormControl>
            </MDBox>

            <MDBox marginBottom={"30px"}>
              <FormControl sx={{ display: "flex", gap: "20px" }}>
                <Input id="email" type="email" placeholder="Email" name="user_email" />
              </FormControl>
            </MDBox>

            <MDBox marginBottom={"30px"}>
              <FormControl sx={{ display: "flex", gap: "20px" }}>
                <Input id="textArea" type="text" placeholder="Your Message" />
              </FormControl>
            </MDBox>

            <FormControl>
              <TextareaAutosize
                name="message"
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
              <Button type="submit" value="Send" variant="contained">
                Send Message
              </Button>
              {/* <input type="submit" value="Send" /> */}
            </MDBox>
          </MDBox>
        </FormGroup>
      </form>
    </MDBox>
  );
}

export default ContactInfoForm;
