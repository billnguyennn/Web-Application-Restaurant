import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Contact() {
    return (
        <React.Fragment>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Contact Us
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    452 This Street Everett, Massachusetts 02148
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Phone Number: (617)-797-5606
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Follow us on:
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Instagram, Facebook
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    B.B Restaurant
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    ----------------------
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p" fontWeight="bold">
                    Monday - Thursday 
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p" >
                    11:00 AM - 9:00 PM
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p" fontWeight="bold">
                    Friday - Sunday
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p" >
                    10:00 AM - 11:00 PM
                </Typography>
            </Container>
            {/* End hero unit */}
        </React.Fragment>
    );
}

export default Contact;

