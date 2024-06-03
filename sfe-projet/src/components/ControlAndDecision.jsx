import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ControlAndDecision = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#999" }}
                align="center"
                colSpan={6}
              >
                CONTROLES & DECISIONS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                rowSpan={2}
                sx={{
                  border: "1px solid black",
                  backgroundColor: "#d1d9db",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width: "20%",
                }}
                align="center"
              >
                Contrôle
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  border: "1px solid black",
                  backgroundColor: "#d1d9db",
                  minWidth: "10px",
                  maxWidth: "20px",
                  width: "30% ",
                }}
                align="center"
              >
                VALEUR
              </TableCell>

              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
                align="center"
                colSpan={2}
              >
                EMT
              </TableCell>
              <TableCell
                colSpan={2}
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
                align="center"
              >
                CONFORMITE
              </TableCell>
            </TableRow>

            
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
              >
                VAI
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
              >
                VP
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
              >
                OUI
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", backgroundColor: "#d1d9db" }}
              >
                NON
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Prérequis
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle des conditions normales d&apos;essai
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Examen administratif
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle administratif
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Plompages
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle des plombages de l&apos;installation et du tachygraphe
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Plompages
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle des plombages de l&apos;installation et du tachygraphe
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Plaquette d&apos;installation
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle de plaquette de l&apos;installation et de son plompage
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow rowSpan={2}>
              <TableCell sx={{ border: "1px solid black" }}>Horloge</TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  minWidth: "10px",
                  maxWidth: "20px",
  
                }}
              >######</TableCell>
              <TableCell colSpan={2} sx={{ border: "1px solid black" }}>
                2min/j ou 10min/j
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Distance(1000m)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}> -+2%</TableCell>
              <TableCell sx={{ border: "1px solid black" }}> -+4%</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Tests de vitesse
              </TableCell>
              <TableCell colSpan={1} sx={{ border: "1px solid black" }}>
                ####
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}> -+4km/h</TableCell>
              <TableCell sx={{ border: "1px solid black" }}> -+6km/h</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Test d&apos;activité
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                Contrôle de l&apos;activité sur le disque d&apos;essai{" "}
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                La circonférence &lt;&lt; L &gt;&gt; des roues motrices
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                L = #### mm
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Le coefficient W du véhicule
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                W = #### imp/km
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                La constante k du Chronotachygraphe
              </TableCell>
              <TableCell colSpan={3} sx={{ border: "1px solid black" }}>
                K = #### imp/km
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>####</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ControlAndDecision;
