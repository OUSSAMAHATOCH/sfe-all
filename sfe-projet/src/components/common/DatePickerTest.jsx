import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
import fr from "dayjs/locale/fr";

const DatePickerTest = ({ label, value, onChange, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={fr}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        inputFormat="MM/DD/YYYY"
        {...props}
      />
    </LocalizationProvider>
  );
};

DatePickerTest.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default DatePickerTest;
