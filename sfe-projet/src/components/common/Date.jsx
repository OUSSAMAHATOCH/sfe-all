import DatePickerTest from "./DatePickerTest";
import { useState } from "react";
import dayjs from "dayjs";

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Date sélectionnée :", dayjs(date).format("DD/MM/YYYY"));
  };

  return (
    <>  
      <DatePickerTest
        label="Sélectionnez une date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </>
  );
};

export default Date;
