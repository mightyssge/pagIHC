import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accessibility } from '@mui/icons-material';



const Content = () => {
    const data = [
        {
           name: "Modelo 1",
           class: "Zapatilla Urbana",
           price: "s/.420.90",
           imglink : 'https://drive.google.com/thumbnail?id=1BZvdqarNgFFw-MohwrYapiA3rpNUKXuD',
           alt : "imagen de zapatilla 1 color x con diseño x de color x"
        },
        {
           name: "Modelo 2",
           class: "Zapatilla Deportiva",
           price: "s/.500.90",
           imglink : "https://drive.google.com/thumbnail?id=1c9PIPmgIn-QAzH5tbuLZl9x8Nu3z5Rpq",
            alt : "imagen de zapatilla 2 color x con diseño x de color x"
        },
        {
           name: "Modelo 3",
           class: "Zapatilla Urbana",
           price: "s/.435.90",
           imglink : "https://drive.google.com/thumbnail?id=1c9PIPmgIn-QAzH5tbuLZl9x8Nu3z5Rpq",
            alt : "imagen de zapatilla 3 con pasadores de color x"
        },
        {
           name: "Modelo 4",
           class: "Zapatilla Deportiva",
           price: "s/.634.90",
           imglink : "https://drive.google.com/thumbnail?id=1Bhuoy26OGPES7ojH-NLAvsBGMuYbYWeo",
            alt : "imagen de zapatilla 4 con pasadores de color x y suela de color x"
        },
        {
           name: "Modelo 5",
           class: "Zapatilla Urbana",
           price: "s/.200.90",
           imglink : "https://drive.google.com/thumbnail?id=1evVZJdWb2E0cm1QtakeCnjb_a8g16ywe",
            alt : "imagen de zapatilla 5 con pasadores de color x y suela de color x"
     
        },
        {
           name: "Modelo 6",
           class: "Zapatilla Urbana",
           price: "s/.500.90",
           imglink : "https://drive.google.com/thumbnail?id=1dSJ7nW48oyUp10kvNyEu_ZA4-FdNClJ-",
            alt : "imagen de zapatilla 6 con punta de color x y suela de color x"
     
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
          src='https://drive.google.com/thumbnail?id=1pnib-vrR25-oTDyHNU0cdMpKIwMtbjpu'
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
        role='button'
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
                  <img src="https://drive.google.com/thumbnail?id=1ZaFqeRCMJlnahAWpFmlOdjfG94E1Msse" alt="Imagen que hace alusión a la amortiguación superior" style={{height:"50%"}}/>
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
                <img src="https://drive.google.com/thumbnail?id=1bnxnJP9MJDlKNCDY8YvNAcrYuQZkN5l3" alt="Imagen que hace alusión a la ligereza de la zapatilla" style={{height:"50%"}} />
                <Typography variant="body1" color="initial" sx={{fontFamily: 'DM Sans , sans-serif', fontSize: '28px'}}> <b>Ligereza Extrema <br /></b></Typography>
                <Typography variant="body1" color="initial" sx={{textAlign: 'center', fontFamily: 'DM Sans, sans-serif'}}>Fabricado con materiales ultraligeros</Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{ textAlign: 'center' }}>
              <Box sx={{border: 1 , borderColor:"black" , borderRadius : 2, p:2 ,  height: "90%"  }}>
                <img src="https://drive.google.com/thumbnail?id=1GCPoIzRyl-owIScccYOyY5xbalV6jar2" alt="Imagen que hace alusión al uso de materiales reciclados para el momento de producir las zapatillas" style={{height:"50%"}} />
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
                <Box variant="div" sx={{m:3 }} role="button" aria-label="Item de una zapatilla">
                    <img src={d.imglink} alt={d.alt} ></img>
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
