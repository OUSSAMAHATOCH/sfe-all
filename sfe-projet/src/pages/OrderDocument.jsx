import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import logo from "../assets/logo-tachynoor.png";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const OrderDocument = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/order/${id}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <Box margin="70px"  ref={componentRef}>
        {data ? (
          <>
            <TableContainer sx={{  marginBottom:"15px" }} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      rowSpan={2}
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "6%",
                      }}
                    >
                      <img src={logo} height="100px" />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "5%",
                      }}
                    >
                      FORMULAIRE
                    </TableCell>
                    <TableCell
                      align="center"
                      rowSpan={2}
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "7%",
                      }}
                    >
                      Date : {dayjs(data.date).format("DD/MM/YYYY")} <br />
                      NºOS :{data.orderNumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black", height:"50px" }}
                    >
                      ORDRE DE SERVICE
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>

            <Typography
              variant="h5"
              sx={{ textDecoration: "underLine" }}
            >
              Client
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,

                  width: "50%",
                }}
              >
                Raison Social / Nom et prenom : {data.client.name}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                ICE/ NºCIN : {data.client.cin}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              sx={{marginBottom: 2}}
            >
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, width: "50%" }}
              >
                Adresse: {data.client.address}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Nº Tel : {data.client.phone}
              </Typography>
            </Stack>
            <Typography
              variant="h5"
              sx={{  textDecoration: "underLine" }}
            >
              Vehicule
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
            >
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, width: "50%" }}
              >
                Marque : {data.vehicle.brand}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Type : {data.vehicle.type}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              sx={{marginBottom: 2}}
            >
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, width: "50%" }}
              >
                NºMatricule: {data.vehicle.registrationNumber}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                NºVIN : {data.vehicle.vinNumber}
              </Typography>
            </Stack>
            <Typography
              variant="h5"
              sx={{ textDecoration: "underLine" }}
            >
              Intervention Demandee
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {data.typeIntervention
                ? "installation et verification apres installation"
                : "verification periodique"}
            </Typography>
            <Typography
              variant="h5"
              sx={{  textDecoration: "underLine" }}
            >
              Exigence Client
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {data.reqCustomer}
            </Typography>
            <Stack  direction={{ xs: "column", sm: "row" }} >
              <Typography
                variant="h5"
                sx={{textDecoration: "underLine" }}
              >
                Controle de vehicule:
              </Typography>
              <Typography marginTop="5px" variant="body1">
               (Precise les animalies apparentes sur le vehicule)
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {data.vehicleControl}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Autorisation de conformite de l&apos;installation:{" "}
              {data.autorisation ? "Non" : "Oui"}
            </Typography>
            <TableContainer  component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      Signature du client ou son representant
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      Signature du RT valant revue de contrat
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", height: 100 }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", height: 100 }}
                    ></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, textDecoration: "underLine" }}
            >
              Controle de fin de presentaion :
            </Typography>
            <Grid container xs={12}>
              <Grid xs={12} sm={6}>
                <Typography variant="body1">
                  j&apos;accuse reception du vehicule en bon etat de marche et
                  ce confermement a la reglementation en vigueur
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Typography variant="body1">
                  Signature du client ou de son representant : <br />
                  Date:
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </Box>
              <Button onClick={handlePrint} variant="contained"> Imprimer l&apos;ordre </Button>
    </>
  );
};

export default OrderDocument;
