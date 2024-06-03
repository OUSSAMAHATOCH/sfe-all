import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
const SelectInput = ({ value, onChange, label, name, title, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>
        <Typography fontSize="14px">{title}</Typography>
      </InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        size="small"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200, 
              overflow: "auto", 
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SelectInput;
