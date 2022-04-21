import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Welcome to BB Restaurant
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Our restaurant is the Perfect setting for a variety of occasions such as
                            Fine Dining for couples, frineds, and families that would like to try out the 
                            exotic Menu we have
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Vietnamese Cuisine  Restaurant
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Long Nguyen
                </Typography>
                
            </Box>
            {/* End footer */}
        </ThemeProvider>
    )
};


export default Home;