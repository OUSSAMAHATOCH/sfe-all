import { Controller } from "react-hook-form";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DatePickerTest from "./common/DatePickerTest";
import dayjs from "dayjs";

const inputs = [
  { name: "vehicle.brand", label: "Marque" },
  { name: "vehicle.registrationNumber", label: "Nº matricule" },
  { name: "vehicle.type", label: "Type" },
  { name: "vehicle.vinNumber", label: "Nº VIN" },
];

const Vehicle = ({ control, disabled }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="vehicle-content"
          id="vehicle-header"
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#123868" }}
            variant="body1"
          >
            Véhicule
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
            {inputs.map((input) => (
              <Grid item xs={12} sm={6} key={input.name} alignItems="center">
                <Controller
                  name={input.name}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      disabled={disabled}
                      value={value}
                      onChange={onChange}
                      label={input.label}
                      name={input.label}
                    />
                  )}
                />
              </Grid>
            ))}
            <Grid xs={12} sm={6}>
              <Controller
                name="vehicle.date"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <DatePickerTest
                    disabled={disabled}
                    label="Date de mec"
                    value={dayjs(value)}
                    onChange={onChange}
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

Vehicle.propTypes = {
  control: PropTypes.object,
  brand: PropTypes.string,
  registrationNumber: PropTypes.string,
  type: PropTypes.string,
  vinNumber: PropTypes.string,
  disabled: PropTypes.boolean,
};

export default Vehicle;
