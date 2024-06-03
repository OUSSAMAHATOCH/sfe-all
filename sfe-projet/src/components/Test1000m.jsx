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

const Test1000m = ({ control }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography sx={{ fontWeight: "bold", color: "#123868" }} variant="body1">Test 1000m</Typography>
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
                name="test1000m.distanceBanc"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Distance Banc"
                    value={value}
                    onChange={onChange}
                    name="distanceBanc"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2.4} alignItems="center">
              <Controller
                name="test1000m.distanceChrono"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Distance Chrono"
                    value={value}
                    onChange={onChange}
                    name="distanceChrono"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2.4} alignItems="center">
              <Controller
                name="test1000m.gapBanc"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Ecart (Distance)"
                    value={value}
                    onChange={onChange}
                    name="gapBanc"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={0.8}
              sx={{
                "& > div": {
                  borderBottom: "var(--Grid-borderWidth) solid",
                  borderColor: "divider",
                },
              }}
            >
              <Grid>
                <Typography variant="caption"> EMT </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption"> -+2% </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4.4} alignItems="center">
              <Controller
                name="test1000m.compliantBanc"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Conforme (Banc)"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="compliantBanc"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={2} alignItems="center">
              <Controller
                name="test1000m.speedBanc"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Vitesse Banc"
                    value={value}
                    onChange={onChange}
                    name="speedBanc"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={2.4} alignItems="center">
              <Controller
                name="test1000m.speedChrono"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Distance Chrono"
                    value={value}
                    onChange={onChange}
                    name="speedChrono"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2.4} alignItems="center">
              <Controller
                name="test1000m.gapChrono"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    label="Ecart(Vitesse)"
                    value={value}
                    onChange={onChange}
                    name="gapChrono"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={0.8}
              sx={{
                "& > div": {
                  borderBottom: "var(--Grid-borderWidth) solid",
                  borderColor: "divider",
                },
              }}
            >
              <Grid>
                <Typography variant="caption"> EMT </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption"> -+4km/h </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4.4} alignItems="center">
              <Controller
                name="test1000m.compliantChrono"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioInput
                    title="Conforme(Chrono)"
                    options={[
                      { value: true, label: "Oui" },
                      { value: false, label: "Non" },
                    ]}
                    onChange={onChange}
                    value={value}
                    name="compliantChrono"
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

Test1000m.propTypes = {
  control: PropTypes.object,
  compliantChrono: PropTypes.bool,
  compliantBanc: PropTypes.bool,
  gapChrono: PropTypes.string,
  gapBanc: PropTypes.string,
  speedChrono: PropTypes.string,
  distanceChrono: PropTypes.string,
  distanceBanc: PropTypes.string,
  speedBanc: PropTypes.string,
};

export default Test1000m;
