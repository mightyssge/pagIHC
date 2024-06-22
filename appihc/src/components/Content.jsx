import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';

const HeroSection = () => {
  return (

    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our E-Commerce Store
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Find the best products at unbeatable prices.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Repeat this Grid item for each feature */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Free Shipping
            </Typography>
            <Typography variant="body1">
              Get free shipping on all orders over $50.
            </Typography>
          </Paper>
        </Grid>
        {/* ... other features */}
      </Grid>
    </Container>
  );
};

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        py: 6,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          Sign Up for Exclusive Offers
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Sign Up Now
        </Button>
      </Container>
    </Box>
  );
};

const Content = () => {
  return (
    <>
    <Box
      sx={{
        flexGrow: 1,
        mt: 10,
        bgcolor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '85vh', // Adjust height as needed
      }}
    >
      <img
        alt="Imagen de una zapatilla flotante que pertenece a nuestro landing page"
        src='../landingPageImg1.png'
        style={{
          height: '90%',
          maxWidth: '85%',
          margin : 4,
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '38%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opcional: para mejor legibilidad
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '50%'
        }}
      >

        <Typography
          variant="h4"
          component="div"
          sx={{
            fontFamily: 'League Gothic, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '90px',
            //lineHeight: '154px',
            color: '#000000',
          }}
        >
        
           Cada paso es un salto hacia tus sueños.
        </Typography>
      </Box>
      </Box>
    <Box>
     <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
    </Box>
    </>
  );
};

export default Content;