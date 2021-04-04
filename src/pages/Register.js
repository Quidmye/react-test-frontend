import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Collapse from '@material-ui/core/Collapse';
import MuiAlert from '@material-ui/core/Alert';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import axios from 'axios';
import { loginUser, useAuthDispatch } from '../context';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAuthDispatch();

  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={
              Yup.object().shape({
                username: Yup.string().max(255).required('username is required'),
                password: Yup.string().max(255).required('password is required')
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              axios.post('http://localhost:4000/register', values)
                .then((response) => {
                  loginUser(dispatch, response);
                  window.location = '/';
                })
                .catch((error) => {
                  setSubmitting(false);
                  console.log(JSON.stringify(error.response.data.message));
                  setOpen(error.response.data.message);
                });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use username to create new account
                  </Typography>
                  <Collapse in={open}>
                    <Alert severity="error" onClose={() => { setOpen(false); }}>
                      { open }
                    </Alert>
                  </Collapse>
                </Box>
                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
