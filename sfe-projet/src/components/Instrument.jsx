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

const Instrument = ({ control }) => {
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
            Information Chronotaghygraphe
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
                name="instrument.brand"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Marque"
                    options={[
                      { value: "KIENZLE", label: "KIENZLE" },
                      { value: "VEEDER ROOT", label: "VEEDER ROOT" },
                      {
                        value: "SARA ELECTRONIQUE",
                        label: "SARA ELECTRONIQUE",
                      },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="brand"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="instrument.model"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Modele"
                    options={[
                      { value: "131802", label: "131802" },
                      { value: "131825", label: "131825" },
                      { value: "131824", label: "131824" },
                      { value: "131826 70 42", label: "131826 70 42" },
                      { value: "131827", label: "131827" },
                      { value: "1324-1323", label: "1324-1323" },
                      { value: "1324", label: "1324" },
                      { value: "MTCO 1390", label: "MTCO 1390" },
                      { value: "KH 8404", label: "KH 8404" },
                      { value: "KH 8406", label: "KH 8406" },
                      { value: "KG 8404", label: "KG 8404" },
                      { value: "KG 8406", label: "KG 8406" },
                      { value: "KG 8456", label: "KG 8456" },
                      { value: "SG 8406", label: "SG 8406" },
                      { value: "HA 8406", label: "HA 8406" },
                      { value: "2416 KAA", label: "2416 KAA" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="model"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="instrument.vmax"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Vmax"
                    options={[
                      { value: "125km/h", label: "125km/h" },
                      { value: "140km/h", label: "140km/h" },
                      { value: "180km/h", label: "180km/h" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="vmax"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="instrument.approval"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Nº d'approbation"
                    options={[
                      { value: "2.03.96", label: "2.03.96" },
                      { value: "2.05.97", label: "2.05.97" },
                      { value: "2.09.97", label: "2.09.97" },
                      { value: "2.24.00", label: "2.24.00" },
                      { value: "2.12.98", label: "2.12.98" },
                      { value: "2.52.04", label: "2.52.04" },
                      { value: "2.33.02", label: "2.33.02" },
                      { value: "2.04.97", label: "2.04.97" },
                      { value: "2.06.97", label: "2.06.97" },
                      { value: "2.20.99", label: "2.20.97" },
                      { value: "2.27.01", label: "2.27.01" },
                      { value: "2.57.05", label: "2.57.05" },
                      { value: "2.60.07", label: "2.60.07" },
                      { value: "2.63.07", label: "2.63.07" },
                      { value: "2.28.01", label: "2.28.01" },
                      { value: "2.69.10", label: "2.69.10" },
                      { value: "2.38.02", label: "2.38.02" },
                      { value: "2.59.07", label: "2.59.07" },
                      { value: "2.65.08", label: "2.65.08" },
                      { value: "2.66.08", label: "2.66.08" },
                      { value: "2.86.20", label: "2.86.20" },
                      { value: "2.53.04", label: "2.53.04" },
                      { value: "2.54.07", label: "2.54.07" },
                      { value: "2.85.20", label: "2.85.20" },
                      { value: "2.08.97", label: "2.08.97" },
                      { value: "2.18.98", label: "2.18.98" },
                      { value: "2.01.96", label: "2.01.96" },
                      { value: "2.15.98", label: "2.15.98" },
                      { value: "2.40.02", label: "2.40.02" },
                      { value: "2.07.97", label: "2.07.97" },
                      { value: "2.14.98", label: "2.14.98" },
                      { value: "2.17.98", label: "2.17.98" },
                      { value: "2.25.00", label: "2.25.00" },
                      { value: "2.02.96", label: "2.02.96" },
                      { value: "2.16.98", label: "2.16.98" },
                      { value: "2.32.02", label: "2.32.02" },
                      { value: "2.13.98", label: "2.13.98" },
                      { value: "2.26.01", label: "2.26.01" },
                      { value: "2.19.98", label: "2.19.98" },
                      { value: "2.31.02", label: "2.31.02" },
                      { value: "2.68.09", label: "2.68.09" },
                      { value: "2.47.04", label: "2.47.04" },
                      { value: "2.71.11", label: "2.71.11" },
                      { value: "2.75.13", label: "2.75.13" },
                      { value: "2.72.11", label: "2.72.11" },
                      { value: "2.76.13", label: "2.76.13" },
                      { value: "2.73.11", label: "2.73.11" },
                      { value: "2.83.15", label: "2.83.15" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="approval"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="instrument.serieNumber"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Nº de serie chrono"
                    value={value}
                    onChange={onChange}
                    name="serieNumber"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <Controller
                name="instrument.approvalNumber"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectInput
                    title="Nº d'homologation"
                    options={[
                      { value: "MA 1001", label: "MA 1001" },
                      { value: "MA 1005", label: "MA 1005" },
                      { value: "MA 1009", label: "MA 1009" },
                      { value: "MA 1018", label: "MA 1018" },
                      { value: "MA 1004", label: "MA 1004" },
                      { value: "MA 0004/C/07", label: "MA 0004/C/07" },
                      { value: "MA 1014", label: "MA 1014" },
                      { value: "MA 1022", label: "MA 1022" },
                      { value: "MA 2.65.08", label: "MA 2.65.08" },
                      { value: "MA 0003/C/07", label: "MA 0003/C/07" },
                      { value: "MA 2.86.20", label: "MA 2.86.20" },
                      { value: "MA 1036", label: "MA 1036" },
                      { value: "MA 1038", label: "MA 1038" },
                      { value: "MA 2.85.20", label: "MA 2.85.20" },
                      { value: "MA 1007", label: "MA 1007" },
                      { value: "MA 1024", label: "MA 1024" },
                      { value: "MA 1002", label: "MA 1002" },
                      { value: "MA 1006", label: "MA 1006" },
                      { value: "MA 1003", label: "MA 1003" },
                      { value: "MA 1011", label: "MA 1011" },
                      { value: "MA 1012", label: "MA 1012" },
                      { value: "MA 1017", label: "MA 1017" },
                      { value: "MA 1031", label: "MA 1031" },
                      { value: "MA 2.71.11", label: "MA 2.71.11" },
                      { value: "MA 2.75.13", label: "MA 2.75.13" },
                      { value: "MA 2.72.11", label: "MA 2.72.11" },
                      { value: "MA 2.76.13", label: "MA 2.76.13" },
                      { value: "MA 2.73.11", label: "MA 2.73.11" },
                      { value: "MA 2.83.15", label: "MA 2.83.15" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="approvalNumber"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} alignItems="center">
              <Controller
                name="instrument.manufactureYear"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="annee de fabrication"
                    value={value}
                    onChange={onChange}
                    name="manufactureYear"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="instrument.w1"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="W1"
                    value={value}
                    onChange={onChange}
                    name="w1"
                    endAdornment="imp/km"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="instrument.w2"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="W2"
                    value={value}
                    onChange={onChange}
                    name="w2"
                    endAdornment="imp/km"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="instrument.w3"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="W3"
                    value={value}
                    onChange={onChange}
                    name="w3"
                    endAdornment="imp/km"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={3} alignItems="center">
              <Controller
                name="instrument.w"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="W"
                    value={value}
                    onChange={onChange}
                    name="w"
                    endAdornment="imp/km"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="center">
              <Controller
                name="instrument.lo"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Lo"
                    value={value}
                    onChange={onChange}
                    name="lo"
                    endAdornment="mm"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="center">
              <Controller
                name="instrument.lg"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Lg"
                    value={value}
                    onChange={onChange}
                    name="lg"
                    endAdornment="mm"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="center">
              <Controller
                name="instrument.lmay"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Lmay"
                    value={value}
                    onChange={onChange}
                    name="lmay"
                    endAdornment="mm"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="center">
              <Controller
                name="instrument.constantK"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Constante K"
                    value={value}
                    onChange={onChange}
                    name="constantK"
                    endAdornment="imp/km"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="instrument.voltage"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Voltage"
                    options={[
                      { value: true, label: "12V" },
                      { value: false, label: "24V" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="voltage"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="instrument.filling"
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

Instrument.propTypes = {
  control: PropTypes.object,
  brand: PropTypes.string,
  vmax: PropTypes.string,
  type: PropTypes.string,
  model: PropTypes.string,
  approvalNumber: PropTypes.string,
  serieNumber: PropTypes.string,
  w: PropTypes.number,
  w1: PropTypes.number,
  w2: PropTypes.number,
  w3: PropTypes.number,
  lo: PropTypes.number,
  lg: PropTypes.number,
  lmay: PropTypes.number,
  voltage: PropTypes.bool,
  filling: PropTypes.bool,
  constantK: PropTypes.string,
};

export default Instrument;
