import TextInput from "./common/TextInput";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const inputs = [
  {
    name: "adaptationCoeff.circumferenceL",
    label: "circonference L",
    unit: "mm",
  },
  { name: "adaptationCoeff.coeffientW", label: "coeffient W", unit: "imp/km" },
  { name: "adaptationCoeff.constantK", label: "constante K", unit: "imp/km" },
];

const AdaptationCoeff = ({ control }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography sx={{ fontWeight: "bold", color: "#123868" }} variant="body1">Adaptation Coefficient</Typography>
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
              <Grid item xs={12} sm={4} key={input.name} alignItems="center">
                <Controller
                  name={input.name}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      label={input.label}
                      value={value}
                      onChange={onChange}
                      name={input.name}
                      endAdornment={input.unit}
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

AdaptationCoeff.propTypes = {
  control: PropTypes.object,
  coeffientW: PropTypes.number,
  constantK: PropTypes.number,
  circumferenceL: PropTypes.number,
};

export default AdaptationCoeff;
