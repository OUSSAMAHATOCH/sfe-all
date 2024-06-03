import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import RadioInput from "./common/RadioInput";

const VerificationNormalConditions = ({ control }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography sx={{ fontWeight: "bold", color: "#123868" }} variant="body1">
            Verification Conditions Normales d Essai
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
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
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.vehicleEmpty"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Véhicule à vide"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="vehicleEmpty"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.temperature"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Température"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="temperature"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.vehicleState"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="état de véhicule"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="vehicleState"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.wearTire"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Usure des peus"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="wearTire"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.pressureTire"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Pression des pneus"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="pressureTire"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="verificationNormalConditions.filling"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Plombage"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="filling"
                  />
                )}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

VerificationNormalConditions.propTypes = {
  control: PropTypes.object,
  vehicleEmpty: PropTypes.bool,
  vehicleState: PropTypes.bool,
  pressureTire: PropTypes.bool,
  temperature: PropTypes.bool,
  wearTire: PropTypes.bool,
  filling: PropTypes.bool,
};

export default VerificationNormalConditions;
