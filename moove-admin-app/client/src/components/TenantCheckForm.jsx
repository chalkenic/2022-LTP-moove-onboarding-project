import React from "react";
import { useForm } from "react-hook-form";
import { Button, Fab } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Component that contains Tenancy Form to be completed by users
// In the case of errors, please retry 'npm install react-hook-form'

export default function TenantCheckForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      textField: "",
      checkbox: false,
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Tenancy Form</h1>
        <Grid container direction="row" spacing={2}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Controller
                control={control}
                name="fNameField"
                render={({ field }) => (
                  <TextField {...field} label="First Name" />
                )}
              />
            </Grid>
            <Grid item xs>
              <Controller
                control={control}
                name="sNameField"
                render={({ field }) => <TextField {...field} label="Surname" />}
              />
            </Grid>
            <Grid item xs>
              <Controller
                control={control}
                name="emailField"
                render={({ field }) => <TextField {...field} label="Email" />}
              />
            </Grid>
            <Grid item xs>
              <Controller
                control={control}
                name="telephoneField"
                render={({ field }) => (
                  <TextField {...field} label="Phone Number" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <h4>Upload Driving License/Passport</h4>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Fab
                  color="secondary"
                  size="small"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Upload photo
                </Fab>
              </label>
            </Grid>
            <Grid item xs>
              <h4>Upload Student ID</h4>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Fab
                  color="secondary"
                  size="small"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Upload photo
                </Fab>
              </label>
            </Grid>
          </Grid>
          <Grid item xs container direction="column">
            <Grid item xs />
            <Grid item xs />
            <Grid item xs>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
