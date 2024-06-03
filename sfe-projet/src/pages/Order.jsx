import { Box, Button, Grid, Stack } from "@mui/material";
import Client from "../components/Client";
import Vehicle from "../components/Vehicle";
import { Controller, useForm } from "react-hook-form";
import DatePickerTest from "../components/common/DatePickerTest";
import RadioInput from "../components/common/RadioInput";
import TextInput from "../components/common/TextInput";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Intervention = {
  VERIFICATION: "VERIFICATION",
  PERIODICVERIFICATION: "PERIODICVERIFICATION",
};

const Order = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      date: null,
      orderNumber: 0,
      typeIntervention: Intervention.VERIFICATION,
      reqCustomer: "",
      vehicleControl: "",
      autorisation: false,
      client: {
        name: "",
        cin: "",
        address: "",
        phone: "",
      },
      vehicle: {
        type: "",
        vinNumber: "",
        registrationNumber: "",
        brand: "",
        date: null,
      },
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/order", data);
      console.log(response.data);
      navigate("/orders");
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
                  Date et ordre service
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
                  <Grid xs={12} sm={6} alignItems="center">
                    <Controller
                      name="date"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <DatePickerTest
                          label="Sélectionnez une date"
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} alignItems="center">
                    <Controller
                      name="orderNumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="Nº d'ordre service"
                          value={value}
                          onChange={onChange}
                          name="orderNumber"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box marginBottom="15px">
            <Client control={control} disabled={false} />
          </Box>
          <Box marginBottom="15px">
            <Vehicle control={control} disabled={false} />
          </Box>
          <Box marginBottom="15px">
            {" "}
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
                  intervention demande
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  xs={6.28}
                  display="flex"
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
                  <Controller
                    name="typeIntervention"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <RadioInput
                        title="intervention demandee"
                        options={[
                          {
                            value: Intervention.VERIFICATION,
                            label:
                              "installation et verifiacation apres installation",
                          },
                          {
                            value: Intervention.PERIODICVERIFICATION,
                            label: "verification periodique",
                          },
                        ]}
                        onChange={onChange}
                        value={value}
                        name="typeIntervention"
                      />
                    )}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box marginBottom="15px">
            {" "}
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
                  Exigence Client
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
                    },
                  }}
                >
                  <Controller
                    name="reqCustomer"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="Exigence Client"
                        value={value}
                        onChange={onChange}
                        name="reqCustomer"
                      />
                    )}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box marginBottom="15px">
            {" "}
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
                  Controle de vehicule
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  xs={12}
                  spacing={2}
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
                  <Grid xs={12} sm={12}>
                    <Controller
                      name="vehicleControl"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="Controle de vehicule"
                          value={value}
                          onChange={onChange}
                          name="vehicleControl"
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} display="flex">
                    <Controller
                      name="autorisation"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="autositation de remise conformite de l'installation"
                          options={[
                            {
                              value: true,
                              label: "Oui",
                            },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="autorisation"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Button type="submit" variant="contained">
            Ajouter
          </Button>
        </form>
      </Stack>
    </>
  );
};

Order.propTypes = {
  orderNumber: PropTypes.number,
  intervention: PropTypes.string,
  reqCustomer: PropTypes.string,
  vehicleControl: PropTypes.string,
  autorisation: PropTypes.bool,
};
export default Order;
