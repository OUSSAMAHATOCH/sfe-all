import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextInput from "./common/TextInput";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const inputs = [
  { name: "client.name", label: "Raison Social / Nom et prénom" },
  { name: "client.cin", label: "ICE / Nº CIN" },
  { name: "client.address", label: "Adresse" },
  { name: "client.phone", label: "Nº Tel" },
];

const Client = ({ control, disabled }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#123868" }}
          >
            Client
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
                      label={input.label}
                      value={value}
                      onChange={onChange}
                      name={input.name}
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

Client.propTypes = {
  control: PropTypes.object.isRequired,
  client: PropTypes.string,
  cin: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  disabled: PropTypes.boolean,
};

export default Client;
