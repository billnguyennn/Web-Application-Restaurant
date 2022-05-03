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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { env } from '../../env';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const theme = createTheme();
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Order() {

    const [menu, setMenu] = useState();
    const [chooseItems, setChooseItems] = useState({});
    const navigate = useNavigate();
    /*  Add item to cart button 
    Check if the id of the item selected === undefined
    set the id of the item = 1;
    else (!=== undefined), increment the value of the item;
    */
    function increase(row) {
        if (chooseItems[row._id] === undefined) {
            // chooseItems[row._id] = 1;
            setChooseItems({ ...chooseItems, [row._id]: 1 });
        } else {
            // chooseItems[row._id] = chooseItems[row._id] + 1;
            setChooseItems({ ...chooseItems, [row._id]: chooseItems[row._id] + 1 });
        }
    }
    /*  Delete item in the cart button
    Check if the id has already in the object --> decrease the value of the item.
    */

    function decrease(row) {
        if (chooseItems[row._id]) {
            setChooseItems({ ...chooseItems, [row._id]: chooseItems[row._id] - 1 })
        }
    }

    useEffect(async () => {
        const response = await axios.get(env.API_HOST + "/menu")
        setMenu(response);
    }, []);

    let onSubmitOrder = () => {
        return navigate("/");
    }
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
                    <Typography align="center" variant="h6" color="inherit" noWrap>
                        Order
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" align="right" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={0} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
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
                                    <TableCell align="center">Delete&nbsp;</TableCell>
                                    <TableCell align="center"> Quantity </TableCell>
                                    <TableCell align="center"> Add</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {menu && menu.data.map((row) => (
                                    <TableRow
                                        key={row.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.title}</TableCell>
                                        <TableCell align="center">{row.category}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{row.description}</TableCell>
                                        <TableCell>
                                            <Fab size="small" color="secondary" onClick={() => decrease(row)}>
                                                <RemoveIcon />
                                            </Fab>
                                        </TableCell>
                                        <TableCell align="center">
                                            {chooseItems[row._id] ? chooseItems[row._id] : 0}
                                        </TableCell>
                                        <TableCell>
                                            <Fab size="small" color="secondary" aria-label="add" onClick={() => increase(row)}>
                                                <AddIcon />
                                            </Fab>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Grid align="center">
                    <Button variant="contained" onClick={(onSubmitOrder)} >
                        Submit Your Order
                    </Button>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}


export default Order;
