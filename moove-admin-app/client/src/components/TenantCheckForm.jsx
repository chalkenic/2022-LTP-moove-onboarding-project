import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";

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

    <Grid container direction="row">
      <Grid item xs>
      <Controller
            control={control}
            name="fNameField"
            render={({ field }) => <TextField {...field} label="First Name" />}
          />
          <Controller
            control={control}
            name="sNameField"
            render={({ field }) => <TextField {...field} label="Surname" />}
          />
          <Controller
            control={control}
            name="emailField"
            render={({ field }) => <TextField {...field} label="Email" />}
          />
          <Controller
            control={control}
            name="telephoneField"
            render={({ field }) => (
              <TextField {...field} label="Phone Number" />
            )}
          />
      </Grid>
      <Grid item xs>
      <Controller
        control={control}
        name="gIDField"
        render={({ field: { value, onChange } }) => (
          // Checkbox accepts its value as `checked`
          // so we need to connect the props here
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label="Driving License/Passport"
          />
          
        )}
      />
      <Controller
        control={control}
        name="sIDField"
        render={({ field: { value, onChange } }) => (
          // Checkbox accepts its value as `checked`
          // so we need to connect the props here
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label="Student ID"
          />
        )}
      />
      </Grid>
      <Grid item xs container direction="column">
        <Grid item xs />
        <Grid item xs><Button type="submit" variant="contained" color="primary">
        Submit
      </Button></Grid>
      </Grid>
    </Grid>

      
    </form>
  );
}
