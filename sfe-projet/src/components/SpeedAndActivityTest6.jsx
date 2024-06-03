import { Controller } from "react-hook-form";
import TextInput from "./common/TextInput";
import { Grid, Typography } from "@mui/material";
import RadioInput from "./common/RadioInput";
import PropTypes from "prop-types";

const SpeedAndActivityTest6 = ({ control }) => {
  return (
    <>
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
            borderColor: "divider",
            padding: 3,
          },
        }}
      >
        <Grid item xs={12} sm={2} alignItems="center">
          <Controller
            name="duration"
            control={control}
            render={() => <Typography>0</Typography>}
          />
        </Grid>
        <Grid item xs={12} sm={2} alignItems="center">
          <Controller
            name="speedAndActivityTest6.chronoSpeed"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                label="chronoSpeed"
                value={value}
                onChange={onChange}
                name="chronoSpeed"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2} alignItems="center">
          {" "}
          <Controller
            name="speedAndActivityTest6.gap"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                label="ecart"
                value={value}
                onChange={onChange}
                name="gap"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={1} alignItems="center">
          <Controller
            name="duration"
            control={control}
            render={() => <Typography>180S</Typography>}
          />
        </Grid>
        <Grid item xs={12} sm={1} alignItems="center">
          <Controller
            name="activity"
            control={control}
            render={() => <Typography> Conduite</Typography>}
          />
        </Grid>
        <Grid item xs={12} sm={1} alignItems="center">
          <Controller
            name="emt"
            control={control}
            render={() => <Typography>-+4km/h</Typography>}
          />
        </Grid>
        <Grid item xs={12} sm={3} alignItems="center">
          <Controller
            name="speedAndActivityTest6.compliant"
            control={control}
            render={({ field: { value, onChange } }) => (
              <RadioInput
                title="Conforme ou non "
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
    </>
  );
};
SpeedAndActivityTest6.propTypes = {
  control: PropTypes.object,
  compliant: PropTypes.bool,
  gap: PropTypes.number,
  chronoSpeed: PropTypes.number,
};

export default SpeedAndActivityTest6;
