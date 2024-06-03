import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const VehicleIdentification = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black" , backgroundColor:"#999" }}
                align="center"
                colSpan={4}
              >
                IDENTIFICATION VEHICULE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                MARQUE
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",

                }}
              >
                ####
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                NºCHASSIS
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                }}
              >
                ####
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                TYPE
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                }}
              >
                ####
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                KILOMETRAGE
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                }}
              >
                ####
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                IMMATRICULATION
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                }}
              >
                ####
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width:"15%"
                }}
              >
                DATE DE MEC
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
                }}
              >
                ####
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VehicleIdentification;
