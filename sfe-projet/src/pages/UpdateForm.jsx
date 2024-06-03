import axios from "axios";
import DatePickerTest from "../components/common/DatePickerTest";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Client from "../components/Client";
import Vehicle from "../components/Vehicle";
import ClockTest from "../components/ClockTest";
import AdaptationCoeff from "../components/AdaptationCoeff";
import Test1000m from "../components/Test1000m";
import Instrument from "../components/Instrument";
import VerificationNormalConditions from "../components/VerificationNormalConditions";
import NormalTestConditions from "../components/NormalTestConditions";
import DistanceTest from "../components/DistanceTest";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import NavBar from "../components/NavBar";
import SpeedAndActivityTest1 from "../components/SpeedAndActivityTest1";
import SpeedAndActivityTest2 from "../components/SpeedAndActivityTest2";
import SpeedAndActivityTest3 from "../components/SpeedAndActivityTest3";
import SpeedAndActivityTest4 from "../components/SpeedAndActivityTest4";
import SpeedAndActivityTest5 from "../components/SpeedAndActivityTest5";
import SpeedAndActivityTest6 from "../components/SpeedAndActivityTest6";
import SpeedAndActivityTest7 from "../components/SpeedAndActivityTest7";
import TextInput from "../components/common/TextInput";

const UpdateForm = () => {
  const [formData, setFormData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/form/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, [id]);

  console.log(formData);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      orderNumber: 0,
      fileNumber: 0,
      date: null,
      client: { name: "", cin: "", address: "", phone: "" },
      vehicle: {
        type: "",
        vinNumber: "",
        registrationNumber: "",
        brand: "",
        date: null,
      },
      normalConditions: {
        temperature: 0,
        wearTireDInt: 0,
        wearTireGInt: 0,
        wearTireDExt: 0,
        wearTireGExt: 0,
        pressureTireDInt: 0,
        pressureTireGInt: 0,
        pressureTireDExt: 0,
        pressureTireGExt: 0,
        vehicleEmpty: false,
        vehicleState: 0,
        tireBrand: "",
        dimension: "",
      },
      clockTest: {
        value: 0,
        gapSec: 0,
        gapMin: 0,
        compliant: false,
      },
      adaptationCoeff: {
        coeffientW: 0,
        constantK: 0,
        circumferenceL: 0,
      },
      test1000m: {
        speedBanc: "",
        compliantChrono: false,
        compliantBanc: false,
        gapChrono: "",
        distanceBanc: "",
        distanceChrono: "",
        speedChrono: "",
        gapBanc: "",
      },
      instrument: {
        brand: "",
        vmax: "",
        model: "",
        approvalNumber: "",
        serieNumber: "",
        w: 0,
        w1: 0,
        w2: 0,
        w3: 0,
        lo: 0,
        lg: 0,
        lmay: 0,
        voltage: false,
        filling: false,
        constantK: "",
        manufactureYear: 0,
        approval: "",
      },
      testDistance: {
        totalizerBefore: 0,
        totalizerAfter: 0,
        beforeAfter: 0,
        compilant: false,
      },
      verificationNormalConditions: {
        vehicleEmpty: false,
        vehicleState: false,
        pressureTire: false,
        temperature: false,
        wearTire: false,
        filling: false,
      },
      speedAndActivityTest1: {
        gap: 0,
        chronoSpeed: 0,
        variatorSpeed: "",
        compliant: false,
      },
      speedAndActivityTest2: {
        gap: 0,
        chronoSpeed: 0,
        compliant: false,
      },
      speedAndActivityTest3: {
        gap: 0,
        chronoSpeed: 0,
        compliant: false,
      },
      speedAndActivityTest4: {
        gap: 0,
        chronoSpeed: 0,
        variatorSpeed: "",
        compliant: false,
      },
      speedAndActivityTest5: {
        gap: 0,
        chronoSpeed: 0,
        variatorSpeed: "",
        compliant: false,
      },
      speedAndActivityTest6: {
        gap: 0,
        chronoSpeed: 0,
        compliant: false,
      },
      speedAndActivityTest7: {
        gap: 0,
        chronoSpeed: 0,
        compliant: false,
      },
    },
  });

  useEffect(() => {
    reset({ ...formData, date: null });
  }, [formData, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/form/${id}`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };
  return (
    <>
      <NavBar />
      <Stack p={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom="15px">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="client-content"
                id="client-header"
              >
                <Typography
                  sx={{ fontWeight: "bold", color: "#123868" }}
                  variant="body1"
                >
                  Date / NºOS / NºFI
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  xs={12}
                  sx={{
                    "--Grid-borderWidth": "2px",
                    borderTop: "var(--Grid-borderWidth) solid",
                    borderLeft: "var(--Grid-borderWidth) solid",
                    borderColor: "divider",
                    "& > div": {
                      borderRight: "var(--Grid-borderWidth) solid",
                      borderBottom: "var(--Grid-borderWidth) solid",
                      borderColor: "divider",
                      padding: 2,
                    },
                  }}
                >
                  <Grid xs={12}>
                    <Controller
                      name="date"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <DatePickerTest
                          label="Sélectionnez une date"
                          value={dayjs(value)}
                          onChange={onChange}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} alignItems="center">
                    <Controller
                      name="orderNumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="NºOS"
                          value={value}
                          onChange={onChange}
                          name="orderNumber"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} alignItems="center">
                    <Controller
                      name="fileNumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="NºFI"
                          value={value}
                          onChange={onChange}
                          name="fileNumber"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box marginBottom="15px">
            <Client control={control} />
          </Box>
          <Box marginBottom="15px">
            <Vehicle control={control} />
          </Box>
          <Box marginBottom="15px">
            <NormalTestConditions control={control} />
          </Box>
          <Box marginBottom="15px">
            <Instrument control={control} />
          </Box>
          <Box marginBottom="15px">
            <VerificationNormalConditions control={control} />
          </Box>
          <Box marginBottom="15px">
            {" "}
            <DistanceTest control={control} />
          </Box>
          <Box marginBottom="15px">
            <ClockTest control={control} />
          </Box>
          <Box marginBottom="15px">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="client-content"
                id="client-header"
              >
                <Typography
                  sx={{ fontWeight: "bold", color: "#123868" }}
                  variant="body1"
                >
                  test vitesse et activite
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SpeedAndActivityTest1 control={control} />
                <SpeedAndActivityTest2 control={control} />
                <SpeedAndActivityTest3 control={control} />
                <SpeedAndActivityTest4 control={control} />
                <SpeedAndActivityTest5 control={control} />
                <SpeedAndActivityTest6 control={control} />
                <SpeedAndActivityTest7 control={control} />
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box marginBottom="15px">
            {" "}
            <AdaptationCoeff control={control} />
          </Box>
          <Box marginBottom="15px">
            <Test1000m control={control} />
          </Box>

          <Button type="submit" variant="contained">
            Enregistrer
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default UpdateForm;
