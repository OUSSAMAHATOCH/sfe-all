import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Validation = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={1}
                align="center"
                sx={{
                  border: "1px solid black",
                  backgroundColor: "#999",
                  padding: "4px",
                }}
              >
                Validation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ border: "1px solid black" , padding:"4px" }}>
                Visa RT
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", height: 70 }}
              ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Validation;
