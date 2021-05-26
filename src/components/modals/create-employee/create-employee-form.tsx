import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import moment from 'moment';
import * as yup from 'yup';

import classes from './index.module.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreateEmployeesForm = (props: any) => {
  const styles = useStyles();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required'),
    joiningDate: yup
    .date()
    .required('Select your birthday'),
    phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      joiningDate: moment(),
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => { }
  });

  return (
    <div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstname"
              label="First Name*"
              name="firstname"
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            // autoFocus
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastname"
              label="Last Name*"
              name="lastname"
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              label="Email*"
              id="email"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="phone"
              label="Phone*"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="empId"
              label="Employee ID*"
              id="empId"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={6}>
            <KeyboardDatePicker
              fullWidth
              margin="normal"
              label="Joinining Date*"
              inputVariant="outlined"
              format="DD/MM/yyyy"
              variant="inline"
              name="joiningDate"
              value={formik.values.joiningDate}
              onChange={v => formik.setFieldValue('joiningDate', v)}
              error={formik.touched.joiningDate && Boolean(formik.errors.joiningDate)}
              helperText={formik.touched.joiningDate && formik.errors.joiningDate}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="department"
              label="Department*"
              name="department"
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="designation"
              label="Designation*"
              id="designation"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="address"
              label="Address*"
              id="address"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.submit}
        >
          Save
        </Button>

      </form>
    </div>
  );

}

export default CreateEmployeesForm;