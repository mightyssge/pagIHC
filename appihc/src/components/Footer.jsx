import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Description of your e-commerce business or mission statement.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="text.secondary">
              About Us
            </Link>
            <br />
            <Link href="#" color="text.secondary">
              Contact Us
            </Link>
            <br />
            <Link href="#" color="text.secondary">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="text.secondary">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
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
        <Typography variant="subtitle1" color="text.secondary" align="center">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
