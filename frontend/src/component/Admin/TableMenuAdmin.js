import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function BasicTable() {
    
    // useState to query menu from db to show every item on the menu
    const [menuItems, setMenuItems] = useState();
    // useState to update state of a method. in this case 
    // useState was used to delete an item from menu
    // eslint-disable-next-line
    const [menuDeletes, setMenuDeletes] = useState();
    
    // This axios.get to display menu on a form.
    useEffect(async () => {
        const response = await axios.get("http://localhost:4200/menu");
        setMenuItems(response);
    }, [])

    // Delete button using axios.delete to query to backend
    let deleteItem =  async (e) => {
            const deletedMenuItem = await axios.delete('http://localhost:4200/menu',
            {data: { _id: e._id } });
            setMenuDeletes(deletedMenuItem);
    }
    
    // Update button to update route.
    const navigate = useNavigate();
    let updateItem =  (e) => {
        return navigate("/admin/menu/update/" + e._id); // route + id of element chose when clicked
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
                        View Menu under Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Menu
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Category</TableCell>
                                    <TableCell align="center">Price&nbsp;</TableCell>
                                    <TableCell align="center">Description&nbsp;</TableCell>
                                    <TableCell align="center">Action&nbsp;</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {menuItems && menuItems.data.map((row) => (
                                    <TableRow
                                        key={row.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.title}</TableCell>
                                        <TableCell align="center">{row.category}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{row.description}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => deleteItem(row)} variant="outlined" startIcon={<DeleteIcon />} sx={{ mt: 3, ml: 1 }}
                                            >
                                                Delete
                                            </Button>
                                            <Button onClick={() => updateItem(row)} variant="outlined" startIcon={<DeleteIcon />} sx={{ mt: 3, ml: 1 }}
                                            >
                                                Update
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default BasicTable;

// create new column for edit for each element.
// add Button