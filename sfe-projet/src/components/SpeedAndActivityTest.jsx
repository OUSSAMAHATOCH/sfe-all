import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextInput from "../components/common/TextInput";
import RadioInput from "../components/common/RadioInput";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SelectInput from "./common/SelectInput";

const SpeedAndActivityTests = ({ control }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="client-content"
          id="client-header"
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#123868" }}
            variant="body1"
          >
            Test vitesse et activte
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "2px solid #d1d9db", width: "15%" }}>
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <SelectInput
                          title="vitesse de variateur"
                          options={[
                            { value: "125", label: "125" },
                            { value: "140", label: "140" },
                            { value: "180", label: "180" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="variatorSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Conduite</Typography>}
                    />
                  </TableCell>
                  <TableCell rowSpan={7} sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.emt"
                      control={control}
                      render={() => <Typography>-+4km/h</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: "2px solid #d1d9db" }}
                  >
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={() => <Typography>0</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Repos</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: "2px solid #d1d9db" }}
                  >
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={() => <Typography>40</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Conduite</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <SelectInput
                          title="vitesse de variateur"
                          options={[
                            { value: "70", label: "70" },
                            { value: "80", label: "80" },
                            { value: "100", label: "100" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="variatorSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Conduite</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <SelectInput
                          title="vitesse de variateur"
                          options={[
                            { value: "100", label: "100" },
                            { value: "100", label: "120" },
                            { value: "160", label: "160" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="variatorSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Conduite</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: "2px solid #d1d9db" }}
                  >
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={() => <Typography>0</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Travail</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: "2px solid #d1d9db" }}
                  >
                    <Controller
                      name="speedAndActivityTests.variatorSpeed"
                      control={control}
                      render={() => <Typography>0</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.chronoSpeed"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="chronoSpeed"
                          value={value}
                          onChange={onChange}
                          name="chronoSpeed"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.gap"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          label="ecart"
                          value={value}
                          onChange={onChange}
                          name="gap"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.duration"
                      control={control}
                      render={() => <Typography>180S</Typography>}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.activity"
                      control={control}
                      render={() => <Typography> Disponibilite</Typography>}
                    />
                  </TableCell>

                  <TableCell sx={{ border: "2px solid #d1d9db" }}>
                    <Controller
                      name="speedAndActivityTests.compliant"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <RadioInput
                          title="Conforme ou non "
                          options={[
                            { value: true, label: "Oui" },
                            { value: false, label: "Non" },
                          ]}
                          onChange={onChange}
                          value={value}
                          name="compliant"
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

SpeedAndActivityTests.propTypes = {
  control: PropTypes.object,
  compliant: PropTypes.bool,
  emt: PropTypes.number,
  activity: PropTypes.bool,
  duration: PropTypes.number,
  gap: PropTypes.number,
  chronoSpeed: PropTypes.number,
  variatorSpeed: PropTypes.number,
};

export default SpeedAndActivityTests;
