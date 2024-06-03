import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";


const Radio = (props) => {
  const value = props.value;
  const label = props.label;
  const onChange = props.onChange;

  return (
    <>

      <FormControlLabel value={value} control={<Radio />} label={label}  onChange={onChange} />
    </>
  );
};

export default Radio;

Radio.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.string,
};
