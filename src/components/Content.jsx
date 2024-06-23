import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accessibility } from '@mui/icons-material';

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
    const data = [
        {
           name: "Modelo 1",
           class: "Zapatilla Urbana",
           price: "500.90",
           imglink : '../shoe1.png'
        },
        {
           name: "Modelo 2",
           class: "Zapatilla Deportiva",
           price: "500.90",
           imglink : "../shoe2.png"
        },
        {
           name: "Modelo 3",
           class: "Zapatilla Urbana",
           price: "500.90",
           imglink : "../shoe3.png"
        },
        {
           name: "Modelo 4",
           class: "Zapatilla Deportiva",
           price: "500.90",
           imglink : "../shoe4.png"
        },
        {
           name: "Modelo 5",
           class: "Zapatilla Urbana",
           price: "500.90",
           imglink : "../shoe5.png"
     
        },
        {
           name: "Modelo 6",
           class: "Zapatilla Urbana",
           price: "500.90",
           imglink : "../shoe6.png"
     
        }
        ]
     
        const settings = {
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 1,
           slidesToScroll: 1,
           centerMode: true,
           variableWidth: true,
           swipeToSlide: true,
           edgeFriction: 0.15,
           Accessibility: true
        };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          mt: 10,
          pb: 0,
          bgcolor: 'white',
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
            bgcolor: 'white',
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
          bgcolor: 'white',
          display: 'flex',
          position: 'relative',
          mx: 10,
          }}>
          <Grid container spacing={{md:5}} columns={{ md: 12 }} sx={{ p: 4 }} >
            <Grid item md={3} sx={{ textAlign: 'center',  }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2 , height: "90%" }}>
                <Box >
                  <img src="../landingPageImg3.png" alt="Imagen que hace alusión a la amortiguación superior" style={{height:"50%"}}/>
                  </Box>
                <Box>
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Amortiguacion superior</b> <br /></Typography>
                
                
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif' , pl:2}}>Proporciona soporte y confort en cada pisada</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2 ,  height: "90%" }}>
                <img src="../landingPageImg5.png" alt="Imagen que hace alusión a una suela antideslizante" style={{height:"50%"}} />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Suela Antideslizante <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Tracción óptima para cualquier superficie</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2 ,  height: "90%" }}>
                <img src="../landingPageImg2.png" alt="Imagen que hace alusión a la ligereza de la zapatilla" style={{height:"50%"}} />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Ligereza Extrema <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Fabricado con materiales ultraligeros</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2 ,  height: "90%"  }}>
                <img src="../landingPageImg4.png" alt="Imagen que hace alusión al uso de materiales reciclados para el momento de producir las zapatillas" style={{height:"50%"}} />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}><b>Materiales Ecológicos <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Utilizamos materiales reciclados</Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            pb: 0,
            bgcolor: 'white',
            display: 'flex',
            mt: 8,
            ml: 10,
            justifyContent: 'left',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Typography variant="body1" sx={{ fontFamily: 'DM Sans , sans-serif', fontSize: '36px', pb: 4 }} color="initial" >
            <b>Lo más vendido</b>
          </Typography>

          
        </Box>
        

        <Box sx={{
            flexGrow: 1,
            mx:20,
            mb:10
          }}>
            <Slider {...settings} >
            {data.map((d) => (
                <Box variant="div" sx={{m:3 }}>
                    <img src="../shoe3.png" alt="imagen de zapatilla" ></img>
                    <Box sx={{px:3, pt:2}}>
                    <Typography sx={{ fontFamily: 'DM Sans , sans-serif'}} > <b>{d.name}</b></Typography>
                    <Typography sx={{ fontFamily: 'DM Sans , sans-serif'}}>{d.class}</Typography>
                    <Typography sx={{ fontFamily: 'DM Sans , sans-serif'}}><b>{d.price}</b></Typography>
                    </Box>
                    
                </Box>
            ))}
            </Slider>
          
          </Box>

          

      </Box>
      
    </>
  );
};

export default Content;