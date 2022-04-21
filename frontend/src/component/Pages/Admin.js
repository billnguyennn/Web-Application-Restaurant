import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const mdTheme = createTheme();

function DashboardContent() {

    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('logInStatus')) {
            return navigate("/signin");
        }
    }, []);

    let logOutButton = () => {
        return localStorage.clear();
    }

    return (
        <div>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                {/* Chart */}
                                <Grid item xs={12} md={10} lg={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Container maxWidth="sm">
                                            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                                                Welcome, Admin
                                            </Typography>
                                        </Container>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                        <Grid align="center">
                            <Button variant="contained" onClick={logOutButton}>
                                Sign Out
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}