import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Grid,
  Container,
} from "@mui/material";
import { inputFields, radioFields } from "./form-utils";

interface FormData {
  [key: string]: string | number;
}

interface ModalFormProps {
  onClose: (status: boolean) => void;
  onSubmit: any;
  prefill?: FormData;
}

const ModalForm: React.FC<ModalFormProps> = ({
  onClose,
  onSubmit,
  prefill,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: prefill });

  const handleClose = () => {
    onClose(false);
  };

  const handleChange = (field: string, value: string | number) => {
    setValue(field, value);
  };

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
    onClose(true);
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Container maxWidth={"xl"}>
        <Paper
          sx={{
            padding: 3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "85vw",
            maxHeight: "95vh",
            overflowY: "auto",
          }}
        >
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h5" gutterBottom>
                  Add Employee
                </Typography>
              </Grid>
              {inputFields.map((field, index) => (
                <Grid item key={index} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    label={field.label}
                    fullWidth
                    type={field.type || "text"}
                    {...register(field.state, {
                      required: field.required
                        ? "This field is required"
                        : false,
                    })}
                    error={Boolean(errors[field.state])}
                    helperText={errors[field.state]?.message || field.helper}
                    size="small"
                  />
                </Grid>
              ))}
              {radioFields.map((field, index) => (
                <Grid item key={index} lg={6} md={6} sm={12} xs={12}>
                  <FormControl>
                    <FormLabel>{field.label}</FormLabel>
                    <RadioGroup
                      aria-label={field.state}
                      name={field.state}
                      defaultValue={getValues()[field.state]}
                      onChange={(e) =>
                        handleChange(field.state, e.target.value)
                      }
                    >
                      {field.options?.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          value={option.value}
                          control={<Radio />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              ))}
              <Grid item lg={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 1 }}
                >
                  Add Employee
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="error"
                  onClick={() => reset()}
                  sx={{ marginTop: 1, marginLeft: 2 }}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Modal>
  );
};

export default ModalForm;
