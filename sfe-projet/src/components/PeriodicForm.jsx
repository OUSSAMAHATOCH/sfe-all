import { Controller, useForm } from "react-hook-form";
import Client from "./Client";
import Vehicle from "./Vehicle";
import NormalTestConditions from "./NormalTestConditions";
import ClockTest from "./ClockTest";
import AdaptationCoeff from "./AdaptationCoeff";
import Test1000m from "./Test1000m";
import Instrument from "./Instrument";
import DistanceTest from "./DistanceTest";
import axios from "axios";
import DatePickerTest from "./common/DatePickerTest";
import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TextInput from "./common/TextInput";
import { useNavigate, useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import dayjs from "dayjs";
import SpeedAndActivityTest1 from "./SpeedAndActivityTest1";
import SpeedAndActivityTest2 from "./SpeedAndActivityTest2";
import SpeedAndActivityTest3 from "./SpeedAndActivityTest3";
import SpeedAndActivityTest4 from "./SpeedAndActivityTest4";
import SpeedAndActivityTest5 from "./SpeedAndActivityTest5";
import SpeedAndActivityTest6 from "./SpeedAndActivityTest6";
import SpeedAndActivityTest7 from "./SpeedAndActivityTest7.jsx";

const Form = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/order/${id}`);
        setValue("client", response.data.client);
        setValue("vehicle", response.data.vehicle);
        setValue("orderService.orderNumber", response.data.orderNumber);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, [id]);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      orderService: {
        orderNumber: 0,
      },
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

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/periodicForm",
        data
      );
      console.log(response.data);
      navigate("/periodicForms");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
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
                    name="orderService.orderNumber"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        disabled={true}
                        label="NºOS"
                        value={value}
                        onChange={onChange}
                        name="orderService.orderNumber"
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
          Ajouter
        </Button>
      </form>
    </Stack>
  );
};

export default Form;
