import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo-tachynoor.png";

const pages = [
  { name: "home", path: "/" },
  { name: "ordre service", path: "/order" },
  { name: "liste des OS", path: "/orders" },
  { name: "liste formulaire VAI", path: "/forms" },
  { name: "liste formulaire VP", path: "/periodicForms" },
];

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#124E66" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              height: 40,
            }}
            src={logo}
            alt="TachyNoor-logo"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TachyNoor
          </Typography>

          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: 40,
            }}
            src={logo}
            alt="TachyNoor Logo"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={page.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
