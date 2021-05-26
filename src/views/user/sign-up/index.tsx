import React, { useState, Suspense } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

export default function SignUp(props: any) {
  const classes = useStyles();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup
      .string()
      .required('Enter your first name'),
    lastName: yup
      .string()
      .required('Enter your last name'),
    birthday: yup
      .date()
      .required('Select your birthday'),
    password: yup
      .string()
      .required('Password is required'),
    passwordConfirmation: yup
    .string()
    .required('Password confirmation is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      birthday: null,
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => { }
  });

  return (
    <Suspense fallback={<div className="loading" />}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              autoComplete="fname"
              margin="normal"
              name="firstName"
              variant="outlined"
              fullWidth
              id="firstName"
              label="First Name"
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              autoFocus
            />

            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />

            <KeyboardDatePicker
              fullWidth
              margin="normal"
              label="Birthday"
              inputVariant="outlined"
              format="DD/MM/yyyy"
              variant="inline"
              name="birthday"
              value={formik.values.birthday}
              onChange={v => formik.setFieldValue('birthday', v)}
              error={formik.touched.birthday && Boolean(formik.errors.birthday)}
              helperText={formik.touched.birthday && formik.errors.birthday}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="passwordConfirmation"
              label="Confirm Password"
              type="password"
              id="password-confirmation"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />

            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I have read and agreed to the terms and conditions."
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Suspense>
  );
}