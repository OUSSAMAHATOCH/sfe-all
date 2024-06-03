import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home() {
  const backcolor = "#124E66";

  return (
    <>
    <NavBar/>
    
      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        style={{ height: "100vh" }}
      >
        <Link to={"/Order"}>
          <Button
            variant="contained"
            className="btnhome"
            style={{ backgroundColor: backcolor }}
          >
            allez a l&apos;odre service
          </Button>
        </Link>
      </Stack>
    </>
  );
}
