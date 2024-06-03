import { useState } from "react";
import SelectInput from "./common/SelectInput";

const SelectTest = () => {
  const [data, setDate] = useState({
    marque: "",
  });

  const handleChange = (event) => {
    setDate({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const options = [
    { value: "AAAAAA", label: "AAAAAAA" },
    { value: "BBBBBBB", label: "BBBBBBB" },
  ];


  return <>
  <SelectInput
  title="marque insturemnt"
  options={options}
  onChange={handleChange}
  value={data.marque}
  name="marque"/>
  </>;
};

export default SelectTest;
