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

const testDistance = ({ control }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography sx={{ fontWeight: "bold", color: "#123868" }} variant="body1">Test Distance </Typography>
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
            <Grid item xs={12} sm={2} display="flex" alignItems="center">
              <Controller
                name="testDistance.totalizerBefore"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Totaliseur_av"
                    value={value}
                    onChange={onChange}
                    name="totalizerBefore"
                    endAdornment="km"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={2} display="flex" alignItems="center">
              <Controller
                name="testDistance.totalizerAfter"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Totaliseur_ap"
                    value={value}
                    onChange={onChange}
                    name="totalizerAfter"
                    endAdornment="km"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2} display="flex" alignItems="center">
              <Controller
                name="testDistance.beforeAfter"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Valeur (av_ap)"
                    value={value}
                    onChange={onChange}
                    name="beforeAfter"
                    endAdornment="km"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={0.7}
              sx={{
                "& > div": {
                  borderBottom: "var(--Grid-borderWidth) solid",
                  borderColor: "divider",
                },
              }}
            >
              <Grid>
                <Typography variant="caption">EMT</Typography>
              </Grid>
              <Grid>
                <Typography variant="caption"> -+2%</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.8}
              sx={{
                "& > div": {
                  borderBottom: "var(--Grid-borderWidth) solid",
                  borderColor: "divider",
                },
              }}
            >
              <Grid>
                <Typography variant="caption">Valeur théorique</Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">
                  125 km/h [16,42 - 17,09]
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">
                  140 km/h [18,62 - 19,38]
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">
                  180 km/h [23,52 - 24,48]
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3.5} display="flex">
              <Controller
                name="testDistance.compilant"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Conforme"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="compilant"
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

testDistance.propTypes = {
  control: PropTypes.object,
  totalizerBefore: PropTypes.number,
  totalizerAfter: PropTypes.number,
  beforeAfter: PropTypes.number,
  compilant: PropTypes.bool,
};

export default testDistance;
