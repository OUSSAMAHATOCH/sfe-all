import { InputAdornment, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TextInput = ({
  value,
  label,
  onChange,
  name,
  type = "string",
  endAdornment,
  ...props
}) => {
  return (
    <>
      <TextField
        label={label}
        type={type}
        variant="outlined"
        value={value}
        onChange={onChange}
        name={name}
        size="small"
        sx={{
          width: "100%",
          fontSize: "8px",
        }}
        InputLabelProps={{ style: { fontSize: "14px" } }}
        inputProps={{ style: { fontSize: "14px" } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography sx={{ fontSize: "13px" }}>{endAdornment}</Typography>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </>
  );
};

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  endAdornment: PropTypes.string,
  props: PropTypes.object,
};
