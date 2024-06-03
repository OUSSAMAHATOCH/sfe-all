import { Typography } from "@mui/material";
import Form from "../components/Form";
import NavBar from "../components/NavBar";


const VerificationForm = () => {
  return (
    <>
    <NavBar/>
    <Typography marginTop="25px" color="GrayText" align="center" variant="h3">Installation et vérification après installation</Typography>
      <Form />
    </>
  );
};

export default VerificationForm;
