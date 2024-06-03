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

const ClockTest = ({ control }) => {
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
            Test d&apos;horloge
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
            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="clockTest.value"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Valeur"
                    value={value}
                    onChange={onChange}
                    name="value"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
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
                <Typography variant="caption">2min/J ou 10min/J</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="clockTest.gapMin"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Ecart en Min"
                    value={value}
                    onChange={onChange}
                    name="gapMin"
                    endAdornment="min"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="clockTest.gapSec"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Ecart en Sec"
                    value={value}
                    onChange={onChange}
                    name="gapSec"
                    endAdornment="S"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} display="flex">
              <Controller
                name="clockTest.compliant"
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
                    name="compliant"
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

ClockTest.propTypes = {
  control: PropTypes.object.isRequired,
  value: PropTypes.number,
  gapSec: PropTypes.number,
  gapMin: PropTypes.number,
  compliant: PropTypes.bool,
};

export default ClockTest;
