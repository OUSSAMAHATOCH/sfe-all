import { useState } from "react";
import TextInput from "./components/TextInput";

const TextFields = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <TextInput
        label={"prenom"}
        value={form.prenom}
        onChange={handleChange}
        name={"prenom"}
      />
      <TextInput
        label={"nom"}
        value={form.nom}
        onChange={handleChange}
        name={"nom"}
      />
    </>
  );
};

export default TextFields;
