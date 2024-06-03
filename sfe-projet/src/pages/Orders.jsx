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

const Orders = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/order");
        const formattedData = response.data.map((data) => ({
          id: data.id,
          name: data.client.name,
          orderNumber: data.orderNumber,
          date: dayjs(data.date).format("DD/MM/YYYY"),
          typeIntervention: data.typeIntervention,
          createForm: data.createForm, // Ajout de la propriété typeIntervention
        }));
        setTables(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/order/${id}`);
      setTables(tables.filter((table) => table.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du formulaire :", error);
    }
  };

  const getLinkForForm = (id) => {
    const table = tables.find((table) => table.id === id);
    if (table && table.typeIntervention === "PERIODICVERIFICATION") {
      return `/periodicForm/${id}`;
    } else {
      return `/form/${id}`;
    }
  };

  return (
    <>
      <NavBar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Propriétaire</TableCell>
              <TableCell>NºOS</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map((table, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{table.name}</TableCell>
                <TableCell>{table.orderNumber}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Link to={`/orderDocument/${table.id}`}>
                      <Button variant="contained" color="warning" size="small">
                        Accéder à l&apos;ordre
                      </Button>
                    </Link>
                    {!table.createForm && (
                      <Link to={getLinkForForm(table.id)}>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          sx={{ marginLeft: "6px" }}
                        >
                          Accéder au formulaire
                        </Button>
                      </Link>
                    )}
                    <Link to={`/updatedOrder/${table.id}`}>
                      <Button variant="contained" size="small">
                        Mettre à jour
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(table.id)}
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

export default Orders;
