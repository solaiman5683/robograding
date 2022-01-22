import CloseIcon from "@mui/icons-material/Close";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import ItemButton from "./Components/Button";
import Navigation from "./Navigation";
import useFirebase from "../../Hooks/useFirebase";
import "./Style.css";

const Dashboard = () => {
  const { logout } = useFirebase();
  const params = useParams();
  const { user } = useAuth();
  console.log(user);
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  if (!user?.email) {
    navigate("/auth");
  }
  const link = params["*"];
  return (
    <div>
      <Navigation setOpenNav={setOpenNav} />
      <Container maxWidth="lg" sx={{ padding: "30px" }}>
        <Grid container>
          <Grid
            item
            md={3}
            sm={12}
            sx={{
              display: { sm: "none", xs: "none", md: "block" },
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                padding: "10px",
                border: "2px solid #e4edff",
              }}
            >
              <Grid container sx={{ alignItems: "center" }} spacing={2}>
                <Grid item md={4}>
                  <div>
                    <img src="/images/avatar.svg" width="100%" alt="" />
                  </div>
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h6">{user?.displayName}</Typography>
                  <a onClick={logout} href="/" className="signout">
                    SIGN OUT
                  </a>
                </Grid>
              </Grid>
            </Box>
            <ItemButton
              link="submission"
              text="Submissions"
              isActive={link === "submission" ? true : false}
              icon="Inventory2Icon"
            />
            <ItemButton
              link="your-cards"
              text="Your Cards"
              isActive={link === "your-cards" ? true : false}
              icon="StyleIcon"
            />
            <ItemButton
              link="wallet"
              text="Wallet"
              isActive={link === "wallet" ? true : false}
              icon="AccountBalanceWalletIcon"
            />
            <ItemButton
              link="profile"
              text="Profile"
              isActive={link === "profile" ? true : false}
              icon="AccountCircleIcon"
            />
            <ItemButton
              link={link}
              text="Save Credit Card"
              isActive={link === "save-your-card" ? true : false}
              icon="CreditCardIcon"
              coomingSoon={true}
            />
            <ItemButton
              link={link}
              text="Address Book"
              isActive={link === "address-book" ? true : false}
              icon="HomeIcon"
              coomingSoon={true}
            />
          </Grid>
          <Grid item md={9} sm={12} sx={{ px: 2, mt: { sm: 4, xs: 4, md: 0 } }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: { xs: "80%", sm: "60%" },
          zIndex: "9999",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: openNav ? "0" : "-100%",
          transition: "all 0.5s ease 0s",
          background: "#fff",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            padding: "10px",
            border: "2px solid #e4edff",
          }}
        >
          <Grid container sx={{ alignItems: "center" }} spacing={2}>
            <Grid item sm={2} xs={3}>
              <div>
                <img src="/images/avatar.svg" width="100%" alt="" />
              </div>
            </Grid>
            <Grid item sm={8} xs={7}>
              <Typography variant="h6">
                {user?.displayName ? user.displayName : "John Doe"}
              </Typography>
              <a href="/" className="signout">
                SIGN OUT
              </a>
            </Grid>
            <Grid item sm={2} xs={2}>
              <Button onClick={() => setOpenNav((value) => !value)}>
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <ItemButton
          link="submission"
          text="Submissions"
          isActive={link === "submission" ? true : false}
          icon="Inventory2Icon"
        />
        <ItemButton
          link="your-cards"
          text="Your Cards"
          isActive={link === "your-cards" ? true : false}
          icon="StyleIcon"
        />
        <ItemButton
          link="wallet"
          text="Wallet"
          isActive={link === "wallet" ? true : false}
          icon="AccountBalanceWalletIcon"
        />
        <ItemButton
          link="profile"
          text="Profile"
          isActive={link === "profile" ? true : false}
          icon="AccountCircleIcon"
        />
        <ItemButton
          link={link}
          text="Save Credit Card"
          isActive={link === "save-your-card" ? true : false}
          icon="CreditCardIcon"
          coomingSoon={true}
        />
        <ItemButton
          link={link}
          text="Address Book"
          isActive={link === "address-book" ? true : false}
          icon="HomeIcon"
          coomingSoon={true}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
