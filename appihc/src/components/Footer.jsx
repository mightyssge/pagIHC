import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', py: 6 , color : "#FFFF"}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#FFFF" gutterBottom>
              Nosotros
            </Typography>
            <Typography variant="subtitle1" color="#FFFF">
              Description of your e-commerce business or mission statement.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#FFFF" gutterBottom>
              Contactanos
            </Typography>
            <Link href="#" color="#FFFF">
              About Us
            </Link>
            <br />
            <Link href="#" color="#FFFF">
              Contact Us
            </Link>
            <br />
            <Link href="#" color="#FFFF">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="#FFFF">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#FFFF" gutterBottom>
              Ayuda
            </Typography>
            <Typography variant="subtitle1" color="#FFFF">
              Description of your e-commerce business or mission statement.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#FFFF" gutterBottom>
              Redes sociales 
            </Typography>
            <Box>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" sx={{ ml: 2 }} color="inherit">
                <Twitter />
              </Link>
              <Link href="#" sx={{ ml: 2 }} color="inherit">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="subtitle1" color="#FFFF" align="center">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
