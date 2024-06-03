import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import logo from "../assets/logo-tachynoor.png";

const HeaderRapport = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                rowSpan={4}
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  width: "20%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <img src={logo} height="80px" alt="Logo" />
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Enregistrement
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Code : EN-EP-04
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Version : 01
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                rowSpan={2}
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Rapport de verification
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Date : 05/06/2022
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Page 1 sur 1
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};

export default HeaderRapport;
