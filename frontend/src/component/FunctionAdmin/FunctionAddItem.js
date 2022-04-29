import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAddForm from './MenuAddForm';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from 'react';
import {env} from '../../env'


const theme = createTheme();

function AddItem() {

  let navigate = useNavigate();
  // alternative way to use click for go back
  // let onClicks = () => {
  //     return navigate("/admin");
  // }

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    //eslint-disable-next-line no-console

    // This method axios.post to add new item on the menu
    const newMenuItems = await axios.post(env.API_HOST + "/menu", {
      title: data.get('title'),
      category: data.get('category'),
      price: data.get('price'),
      description: data.get('description'),
      image: data.get('image'),
    });
    // this is to check if we have added new item on the menu, 
    // and return to the dashboard of admin 
    if (newMenuItems.data === true) {
      return navigate("/admin");
    } else {
      return navigate("/");
    }
  }

  // Check if they have credential to access the admin page
  useEffect(() => {
    if (!localStorage.getItem('logInStatus')) {
      return navigate("/signin");
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Add New Menu Item
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            New Item
          </Typography>
          <React.Fragment>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
              <MenuAddForm />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/admin">
                  <Button /* onClick={onClicks} */ sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  type="submit"
                >
                  ADD
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default AddItem;

// Take data from the Form --> Sign In Form.



// Press Add --> backend can received data.
// after press add --> should receive a information saying Item is added to db