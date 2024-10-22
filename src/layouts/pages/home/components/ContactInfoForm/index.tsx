/* eslint-disable prettier/prettier */
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
import { BASE_URL } from "config/config";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function ContactInfoForm() {
  const form = useRef<any>();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValue, setFormvalue] = useState<any>({});

  // console.log(formValue, "fff");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormvalue({ ...formValue, [name]: value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Disable the button
    setLoading(true);

    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((data) => {
        // Re-enable the button.
        // console.log(data);
        setLoading(false);
        Swal.fire("Please check your mail");
      })
      .catch((error) => {
        // Handle error if necessary
        // console.error("Error sending email:", error);
        setLoading(false); // Make sure to re-enable the button even if there's an error
      });
  };

  return (
    <MDBox
      bgColor="white"
      marginTop={"40px"}
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
        <MDTypography variant="h6" color="white" sx={{ color: "white" }}>
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
                  name="firstName"
                  onChange={handleInputChange}
                  label="First Name"
                  variant="standard"
                />
              </FormControl>

              <FormControl>
                <TextField
                  id="standard-basic"
                  name="lastName"
                  label="Last Name"
                  variant="standard"
                  onChange={handleInputChange}
                />
              </FormControl>
            </MDBox>

            <MDBox marginBottom={"30px"}>
              <FormControl sx={{ display: "flex", gap: "20px" }}>
                <TextField
                  id="standard-basic"
                  name="email"
                  label="Email Address"
                  variant="standard"
                  onChange={handleInputChange}
                  required
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
                  onChange={handleInputChange}
                  multiline
                  rows={4}
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
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </MDBox>
          </MDBox>
        </FormGroup>
      </form>
    </MDBox>
  );
}

export default ContactInfoForm;
