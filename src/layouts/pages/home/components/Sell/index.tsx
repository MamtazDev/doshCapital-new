import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import { useState } from "react";

import BookingCard from "examples/Cards/BookingCard";
import "./index.css";

// Images
import doshCoainImage from "assets/images/dosh/doshcoin.png";
import networkImage from "assets/images/dosh/network.png";
import robotsImage from "assets/images/dosh/robots.png";

function Sell(): JSX.Element {
  const [collapse, setCollapse] = useState<number | boolean>(false);
  return (
    <MDBox>
      <MDBox mb={3}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={robotsImage}
                header="WHAT WE SELL"
                title="TRADING SOLUTIONS"
                nature="FULLY AUTOMATED  |  BACK TESTED  |  ROBUST"
                description="<br/><h3>Your Success is Our Success!</h3>
                At Dosh Capital, we sell Trading Solutions,
Bots, Memberships and you earn DoshCoin.
Choose to buy or just jump aboard. You can get
started with as little as $375 to join a pool of
investors. Your (ROI) Return on Investment is
50-100% per annum. Our Bots are back tested
with over 5-10 years of test data, fined tuned
and optimized for peak performance. You can
Test drive and optimize any of our Bots. Dosh
will assist you setup your Account… so rest
easy!
Refer to our PDS for more information."
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={networkImage}
                header="HOW WE CONNECT"
                title="NETWORK"
                nature="MULTILEVEL  |  MULTI $ BAND  |  EQUAL PLAYING FIELD"
                description="<br/>As you become a member of Dosh Capital you
are part of our Network. Earn a commission of
5% for every member you introduce as an
Associate. Subject to your plan, your trading
account/s and the account $$ value, you will be
placed in the Network. For an even playing field,
every member will have two members below
them and every member will pay 10% of their
profits to the member above in their Network.
Your account/s are linked to Dosh by our
preferred brokers, an advantage, as IB accounts.
Refer to our PDS for more information."
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mb={4}>
            <MDBox mt={3} sx={{ height: "100%" }}>
              <BookingCard
                image={doshCoainImage}
                header="HOW WE EARN"
                title="DO$HCOIN"
                nature="SUBSCRIPTION PLAN  |  ALGORITHM  | PERFORMANCE"
                description="<br/>Become a member of the Dosh family, enroll into our Network and you are entitled to DoshCoin.Twenty percent (20%) for your Subscription, Earnings & Profits will go towards generating DoshCoin. The Algorithm will analyse your trading $$ value and create DoshCoin for you. On the Client Dashboard in your portfolio are displayed Trading Bots, Account performance, Network position & DoshCoin earned through the inbuilt Algorithm. You can place in your Wallet or Withdraw as ‘cash’ at your discretion.
Refer to our PDS for more information!"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Sell;
