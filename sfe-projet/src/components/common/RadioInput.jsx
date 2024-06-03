import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const RadioInput = ({ options, value, onChange, title, name }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <FormLabel sx={{ fontSize: "14px" }}>{title}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "14px",
                  },
                }}
              />
            }
            label={<Typography sx={{ fontSize: '14px' }}>{option.label}</Typography>} 
          />
        ))}
      </RadioGroup>
    </Stack>
  );
};

RadioInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioInput;
