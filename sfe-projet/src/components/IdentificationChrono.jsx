import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const IdentificationChrono = () => {
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
                IDENTIFICATION CHRONOTACHYGRAPHE
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
                  width: "15%",
                }}
              >
                Marque
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
                  width: "15%",
                }}
              >
                NºSérie
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
                  width: "15%",
                }}
              >
                Type
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
                  width: "15%",
                }}
              >
                Année de Fabrication
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
                  width: "15%",
                }}
              >
                NºHomologation
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
                  width: "15%",
                }}
              >
                V max
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

export default IdentificationChrono;
