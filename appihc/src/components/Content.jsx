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
          pb: 0,
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
            margin: 4,
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '38%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white', // Opcional: para mejor legibilidad
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
        <Button
          sx={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#C6A567', // Opcional: para mejor legibilidad
            padding: '10px',
            borderRadius: '5px',
            maxWidth: '50%',
            color: "white",
            '&:hover': {
              backgroundColor: '#B58C44', // Change the background color on hover
              color: '#000000', // Change the text color on hover
            }
          }}>
          <Typography variant="body1" sx={{ fontFamily: 'DM Sans , sans-serif' }}> <b>Ver productos</b></Typography>
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            flexGrow: 1,
            pb: 0,
            bgcolor: 'skyblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Typography variant="body1" sx={{ fontFamily: 'DM Sans , sans-serif', fontSize: '36px', pb: 4 }} color="initial" >
            <b>¿Por Qué nuestras zapatillas son únicas?</b>
          </Typography>
        </Box>


        <Box sx={{
          flexGrow: 1,
          pb: 0,
          bgcolor: 'green',
          display: 'flex',
          position: 'relative',
          mx: 10,
          }}>
          <Grid container spacing={{md:5}} columns={{ md: 12 }} sx={{ p: 4 }} >
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2, height : 200}}>
                <img src="../landingPageImg3.png" alt="Imagen que hace alusión a la amortiguación superior" />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Amortiguacion superior</b> <br /></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'left', fontFamily: 'DM Sans, sans-serif'}}>Proporciona soporte y confort en cada pisada</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2, height : 200}}>
                <img src="../landingPageImg5.png" alt="Imagen que hace alusión a una suela antideslizante" />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Suela Antideslizante <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Tracción óptima para cualquier superficie</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2, height : 200}}>
                <img src="../landingPageImg2.png" alt="Imagen que hace alusión a la ligereza de la zapatilla" />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Ligereza Extrema <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Fabricado con materiales ultraligeros</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2, height : 200 }}>
                <img src="../landingPageImg4.png" alt="Imagen que hace alusión al uso de materiales reciclados para el momento de producir las zapatillas" />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}><b>Materiales Ecológicos <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Utilizamos materiales reciclados</Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>

      </Box>
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
    </>
  );
};

export default Content;