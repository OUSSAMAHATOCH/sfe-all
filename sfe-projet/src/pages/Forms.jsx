import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/form");
        const formattedData = response.data.map((data) => ({
          id: data.id,
          name: data.client.name,
          registrationNumber: data.vehicle.registrationNumber,
          date: dayjs(data.date).format("DD/MM/YYYY"),
        }));
        setForms(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/form/${id}`);
      setForms(forms.filter((form) => form.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du formulaire :", error);
    }
  };

  return (
    <>
      <NavBar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Proprietaire</TableCell>
              <TableCell>Numéro d&apos;Immatriculation</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map((form, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{form.name}</TableCell>
                <TableCell>{form.registrationNumber}</TableCell>
                <TableCell>{form.date}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Link to={`/document/${form.id}`}>
                      <Button variant="contained" color="warning" size="small">
                        Accéder au certaficat
                      </Button>
                      <Link to={`/rapport/${form.id}`}>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          sx={{ marginLeft: "6px" }}
                        >
                          Accéder au rapport
                        </Button>
                      </Link>
                    </Link>
                    <Link to={`/updatedForm/${form.id}`}>
                      <Button variant="contained" size="small">
                        mettre a jour
                      </Button>
                    </Link>

                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(form.id)}
                    >
                      Supprimer
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Forms;
