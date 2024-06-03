import { useState } from "react";
import RadioInput from "./common/RadioInput";

const RadioButton = () => {
  const [form, setForm] = useState({
    etatVehicule: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const options = [
    { value: "conforme", label: "Conforme" },
    { value: "nonConforme", label: "Non Conforme" },
  ];

  return (
    <>
      <RadioInput
        title="Véhicule"
        options={options}
        onChange={handleChange}
        value={form.etatVehicule}
        name="etatVehicule"
      />
    </>
  );
};

export default RadioButton;
