import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import logo from "../assets/logo-tachynoor.png";

const Document = () => {
  const [data, setData] = useState(null);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
      <Box sx={{ margin: "5px" }} ref={componentRef}>
        {data ? (
          <>
            <Box marginBottom="50px" display="flex" alignItems="center">
              <Box>
                <img src={logo} alt="Logo" height="80px" />
              </Box>
              <Box flexGrow={1} textAlign="center">
                <Typography variant="h6">
                  Agrément du Ministère de l’industrie et du commerce
                </Typography>
                <Typography variant="h6">
                  N°: M.01.56.34.22 du 11 octobre 2022
                </Typography>
                <Typography variant="h6">
                  Marque d’identification de l’installateur : 2HA
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h6"
              sx={{ textDecoration: "underLine", textAlign: "center" }}
            >
              CERTIFICAT D’INSTALLATION DU CHRONOTACHYGRAPHE
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              <b>Nº: 470 / 2021</b>
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "inline",
                  padding: "2px",
                  backgroundColor: "#c0c7ca",
                }}
              >
                Informations sur le Propriétaire du Véhicule
              </Typography>
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Nom ou raison sociale du propriétaire du véhicule :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.client.name}
              </Typography>
            </Stack>

            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "inline",
                  padding: "2px",
                  backgroundColor: "#c0c7ca",
                }}
              >
                Informations sur le véhicule
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Numéro d ’ immatriculation du véhicule :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.vehicle.registrationNumber}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Numéro de châssis du véhicule :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.vehicle.vinNumber}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Coefficient caractéristique du véhicule w (tr/km ou imp/km) :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.w}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Circonférence effective des pneumatiques des roues motrices du
                véhicule,“ l ” (mm) :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.lmay}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Dimensions des roues motrices :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.normalConditions.dimension}
              </Typography>
            </Stack>

            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "inline",
                  padding: "2px",
                  backgroundColor: "#c0c7ca",
                }}
              >
                Informations sur l’Instrument
              </Typography>
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Numéro de la décision d’approbation de modèle :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.approval}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Marque de l’instrument :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.brand}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Modèle / Type :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.model}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                N° de série de l’instrument :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.serieNumber}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                la constante K de l’instrument (tr/km ou imp/km) :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.constantK}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                la vitesse maximal de l’instrument (km /h) :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                {data.instrument.vmax}
              </Typography>
            </Stack>
            <Box
              sx={{
                border: "1px solid black",
                padding: 1,
              }}
            >
              <Typography variant="body1" sx={{}}>
                Les essais de cette installation ont été effectués conformément
                aux dispositions de l’arrêté du Ministre de l’Industrie, du
                commerce, de l’Economie Verte et Numérique N° 2399-20 du 6 safar
                1442 (24 septembre 2020) relatif aux chronotachygraphes.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underLine",
                  textAlign: "center",
                }}
              >
                Ce certificat n’a plus d’effet après chaque bris des scellés.
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              sx={{ justifyContent: "flex-end" }}
            >
              <Typography variant="body1" sx={{}}>
                À Ouarzazate, le :
              </Typography>
              <Typography variant="body1" sx={{}}>
                {dayjs(data.date).format("DD/MM/YYYY")}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{}}>
                Signature de l’installateur agréé :
              </Typography>
              <Typography variant="body1" sx={{ alignSelf: "flex-end" }}>
                Signature du service concerné :
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginBottom: "180px" }}
            >
              ****
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              SOCIETE TACHY NOOR SARL N°E38 QUARTIER INDUSTRIEL OUARZAZATE , ICE
              :003070240000011
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              RC : 11937 - IF : 52437299 CNSS : 4121681 - PATENTE : 47104989 /
              GSM :0678394859
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              E-mail :stetachynoor@gmail.com
            </Typography>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </Box>
      <Button onClick={handlePrint} variant="contained">
        Imprimer le certaficat
      </Button>
    </>
  );
};

export default Document;
