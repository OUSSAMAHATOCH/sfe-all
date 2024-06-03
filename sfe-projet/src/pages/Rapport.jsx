import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import HeaderRapport from "../components/HeaderRapport";
import Validation from "../components/Validation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Rapport = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/form/${id}`);
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
      <Box ref={componentRef} margin="30px">
        {data ? (
          <>
            <HeaderRapport />
            <br />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#999",
                        padding: "4px",
                      }}
                      align="center"
                      colSpan={4}
                    >
                      IDENTIFICATION VEHICULE
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      MARQUE
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        height: "10px",
                        padding: "4px",
                      }}
                    >
                      {data.vehicle.brand}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "20%",
                        padding: "4px",
                      }}
                    >
                      NºCHASSIS
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.vehicle.vinNumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      TYPE
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.vehicle.type}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "25%",
                        padding: "4px",
                      }}
                    >
                      KILOMETRAGE
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.testDistance.totalizerAfter}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "30px",
                        width: "25%",
                        padding: "4px",
                      }}
                    >
                      IMMATRICULATION
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.vehicle.registrationNumber}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      DATE DE MEC
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {dayjs(data.vehicle.date).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#999",
                        padding: "4px",
                      }}
                      align="center"
                      colSpan={4}
                    >
                      IDENTIFICATION CHRONOTACHYGRAPHE
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "25%",
                        padding: "4px",
                      }}
                    >
                      Marque
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.brand}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "25%",
                        padding: "4px",
                      }}
                    >
                      NºSérie
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.serieNumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      Type
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.model}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      Année de Fabrication
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.manufactureYear}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      NºHomologation
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.approvalNumber}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "15%",
                        padding: "4px",
                      }}
                    >
                      V max
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.instrument.vmax}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#999",
                        padding: "4px",
                      }}
                      align="center"
                      colSpan={6}
                    >
                      CONTROLES & DECISIONS
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      rowSpan={2}
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "30%",
                        padding: "4px",
                      }}
                      align="center"
                    >
                      Contrôle
                    </TableCell>
                    <TableCell
                      rowSpan={2}
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        minWidth: "10px",
                        maxWidth: "20px",
                        width: "30%",
                        padding: "4px",
                      }}
                      align="center"
                    >
                      VALEUR
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                      align="center"
                      colSpan={2}
                    >
                      EMT
                    </TableCell>
                    <TableCell
                      colSpan={2}
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                      align="center"
                    >
                      CONFORMITE
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                    >
                      VAI
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                    >
                      VP
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                    >
                      OUI
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        backgroundColor: "#d1d9db",
                        padding: "4px",
                      }}
                    >
                      NON
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Prérequis
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Contrôle des conditions normales d&apos;essai
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Examen administratif
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Contrôle administratif
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Plompages
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Contrôle des plombages de l&apos;installation et du
                      tachygraphe
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Plaquette d&apos;installation
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Contrôle de plaquette de l&apos;installation et de son
                      plompage
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow rowSpan={2}>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Horloge
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                        minWidth: "10px",
                        maxWidth: "20px",
                        padding: "4px",
                      }}
                    >
                      {data.clockTest.value}
                    </TableCell>
                    <TableCell
                      colSpan={2}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      2min/j ou 10min/j
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Distance(1000m)
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {data.test1000m.gapBanc}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {" "}
                      -+2%
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {" "}
                      -+4%
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Tests de vitesse
                    </TableCell>
                    <TableCell
                      colSpan={1}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {data.test1000m.gapChrono}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {" "}
                      -+4km/h
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      {" "}
                      -+6km/h
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Test d&apos;activité
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Contrôle de l&apos;activité sur le disque d&apos;essai{" "}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      La circonférence &lt;&lt; L &gt;&gt; des roues motrices
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      L = {data.adaptationCoeff.circumferenceL} mm
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      Le coefficient W du véhicule
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      W = {data.adaptationCoeff.coeffientW} imp/km
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      La constante k du Chronotachygraphe
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "1px solid black", padding: "4px" }}
                    >
                      K = {data.adaptationCoeff.constantK} imp/km
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                    <TableCell
                      sx={{ border: "1px solid black", padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <Validation />
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </Box>
      <Button onClick={handlePrint} variant="contained">
        {" "}
        Imprimer le rapport{" "}
      </Button>
    </>
  );
}


export default Rapport;
