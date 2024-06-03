import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const GeneratedForm = () => {
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
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Box sx={{ border: "1px solid black", padding: 1 }} ref={componentRef}>
        {data ? (
          <>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Agrément du Ministère de l’industrie et du commerce
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              N°: M.01.56.34.22 du 11 octobre 2022
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginBottom: 7 }}
            >
              Marque d’identification de l’installateur : 2HA
            </Typography>

            <Typography
              variant="h5"
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
                marginTop: "2rem",
                marginBottom: "2rem",
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
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Nom ou raison sociale du propriétaire du véhicule :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.client.name}
              </Typography>
            </Stack>

            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
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
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Numéro d ’ immatriculation du véhicule :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.vehicle.registrationNumber}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Numéro de châssis du véhicule :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                ##################
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Coefficient caractéristique du véhicule w (tr/km ou imp/km) :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.w}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Circonférence effective des pneumatiques des roues motrices du
                véhicule,“ l ” (mm) :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.lmay}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Dimensions des roues motrices :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                ##################
              </Typography>
            </Stack>

            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
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
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Numéro de la décision d’approbation de modèle :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                ##################
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Marque de l’instrument :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.brand}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Modèle / Type :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.model}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                N° de série de l’instrument :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.serieNumber}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                la constante K de l’instrument (tr/km ou imp/km) :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.constantK}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                la vitesse maximal de l’instrument (km /h) :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                {data.instrument.vmax}
              </Typography>
            </Stack>
            <Box
              sx={{
                border: "1px solid black",
                padding: 1,
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
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
                  marginBottom: 1,
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
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                À Ouarzazate, le :
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                {dayjs(data.date).format("DD/MM/YYYY")}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, dm: 10 }}
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Signature de l’installateur agréé :
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, alignSelf: "flex-end" }}
              >
                Signature du service concerné :
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              *****
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              SOCIETE TACHY NOOR SARL N°E38 QUARTIER INDUSTRIEL OUARZAZATE , ICE
              :003070240000011
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              RC : 11937 - IF : 52437299 CNSS : 4121681 - PATENTE : 47104989 /
              GSM :0678394859
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              E-mail :stetachynoor@gmail.com
            </Typography>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </Box>

      <button onClick={handlePrint}>Print article</button>
    </>
  );
};

export default GeneratedForm;
