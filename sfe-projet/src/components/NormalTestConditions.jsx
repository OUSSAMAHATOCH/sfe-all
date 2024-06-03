import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Controller } from "react-hook-form";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import RadioInput from "./common/RadioInput";
import SelectInput from "./common/SelectInput";
const normalConditions = ({ control }) => {
  return (
    <>
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
            Conditions Normales d&apos;Essai
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
            <Grid item xs={12} sm={6}>
              <Controller
                name="normalConditions.vehicleEmpty"
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
                name="normalConditions.temperature"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="température"
                    value={value}
                    onChange={onChange}
                    name="temperature"
                    endAdornment="ºC"
                  />
                )}
              />
            </Grid>

            <Grid item xs={3} sm={6} alignItems="center">
              <Controller
                name="normalConditions.vehicleState"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Véhicule en bon état de démarche"
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
            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="normalConditions.tireBrand"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Marque"
                    options={[
                      { value: "Michelin", label: "Michelin" },
                      { value: "Bridgestione", label: "Bridgestione" },
                      { value: "Double star", label: "Double star" },
                      { value: "Royal black", label: "Royal black" },
                      { value: "GoodYear", label: "GoodYear" },
                      { value: "LASSA", label: "LASSA" },
                      { value: "Hankook", label: "Hankook" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="tireBrand"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="normalConditions.dimension"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="dimension"
                    options={[
                      { value: "315/80 R 22,5", label: "315/80 R 22,5" },
                      { value: "295/80 R 22,5", label: "295/80 R 22,5" },
                      { value: "13 R 22,5", label: "13 R 22,5" },
                      { value: "12 R 22,5", label: "12 R 22,5" },
                      { value: "11 R 22,5", label: "11 R 22,5" },
                      { value: "10 R 22,5", label: "10 R 22,5" },
                      { value: "215/75 R 17,5", label: "215/75 R 17,5 " },
                      { value: "225/65 R 17,5", label: "225/65 R 17,5" },
                      { value: "225/75 R 17,5", label: "225/75 R 17,5" },
                      { value: "8,5 R 17,5", label: "8,5 R 17,5" },
                      { value: "9 R 17,5", label: "9 R 17,5" },
                      { value: "7,25 R 17,5", label: "7,25 R 17,5" },
                      { value: "9 R 20", label: "9 R 20" },
                      { value: "195/75 R 16", label: "195/75 R 16" },
                      { value: "225/65 R 16", label: "225/65 R 16" },
                      { value: "235/65 R 16", label: "235/65 R 16" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="dimension"
                  />
                )}
              />
            </Grid>
            <Grid container xs={12} sm={6}>
              <Grid
                item
                xs={12}
                sm={3}
                display="flex"
                alignItems="center"
                p={1}
              >
                <Typography color="#6f6e71" fontSize="14px" variant="body1">
                  Pression du pneu
                </Typography>
              </Grid>
              <Grid item container xs={12} sm={9} spacing={2} my={1}>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.pressureTireGExt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="GExt"
                        name="pressureTireGExt"
                        value={value}
                        onChange={onChange}
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.pressureTireDExt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="DExt"
                        value={value}
                        onChange={onChange}
                        name="pressureTireDExt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.pressureTireGInt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="GInt"
                        value={value}
                        onChange={onChange}
                        name="pressureTireGInt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.pressureTireDInt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="DInt"
                        value={value}
                        onChange={onChange}
                        name="pressureTireDInt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={6}>
              <Grid
                item
                xs={12}
                sm={3}
                display="flex"
                alignItems="center"
                p={1}
              >
                <Typography color="#6f6e71" fontSize="14px" variant="body1">
                  Usure du pneu
                </Typography>
              </Grid>
              <Grid item container xs={12} sm={9} spacing={2} my={1}>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.wearTireGExt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="GExt"
                        value={value}
                        onChange={onChange}
                        name="wearTireGExt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.wearTireDExt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="DExt"
                        value={value}
                        onChange={onChange}
                        name="wearTireDExt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.wearTireGInt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="GInt"
                        value={value}
                        onChange={onChange}
                        name="wearTireGInt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Controller
                    name="normalConditions.wearTireDInt"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        label="DInt"
                        value={value}
                        onChange={onChange}
                        name="wearTireDInt"
                        endAdornment="Bar"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

normalConditions.propTypes = {
  control: PropTypes.object,
  temperature: PropTypes.string,
  pressureTireGExt: PropTypes.number,
  pressureTireGInt: PropTypes.number,
  pressureTireDExt: PropTypes.number,
  pressureTireDInt: PropTypes.number,
  wearTireGExt: PropTypes.number,
  wearTireDExt: PropTypes.number,
  wearTireGInt: PropTypes.number,
  wearTireDInt: PropTypes.number,
  vehicleEmpty: PropTypes.bool,
  vehicleState: PropTypes.bool,
  tireBrand: PropTypes.string,
  dimension: PropTypes.string,
};

export default normalConditions;
