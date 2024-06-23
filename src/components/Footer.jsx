import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', py: 6 , color : "#FFFF"}}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="#FFFF" sx={{ fontFamily: 'Akshar , sans-serif' , fontSize: "32px"}} gutterBottom>
              Nosotros
            </Typography>
            <Typography variant="subtitle1"  sx={{ fontFamily: 'Inter , sans-serif' , fontWeight: 200  }} color="#FFFF">
              Acerca de nosotros
            </Typography>
            <Typography variant="subtitle1"  sx={{ fontFamily: 'Inter , sans-serif', fontWeight: 200  }} color="#FFFF">
              Tiendas
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} sx={{mr:3}}>
            <Typography variant="h6" color="#FFFF"sx={{ fontFamily: 'Akshar , sans-serif' , fontSize: "32px"}}  gutterBottom>
              Contactanos
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Inter , sans-serif' , fontWeight: 200  }} color="#FFFF">
            (01) 748-2922
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Inter , sans-serif' , fontWeight: 200  }} color="#FFFF">
              contactanos@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} sx={{mr:15}}>
            <Typography variant="h6" color="#FFFF" sx={{ fontFamily: 'Akshar , sans-serif' , fontSize: "32px"}} gutterBottom>
              Ayuda
            </Typography>
            <Typography variant="subtitle1"sx={{ fontFamily: 'Inter , sans-serif' , fontWeight: 200  }}  color="#FFFF">
              FAQ
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Inter , sans-serif' , fontWeight: 200  }} color="#FFFF">
              Politicas de privacidad
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>

          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="#FFFF" gutterBottom sx={{ fontFamily: 'DM Sans , sans-serif' }}>
              Redes sociales 
            </Typography>
            <Box>
              <Link href="#" color="inherit" aria-label='Redirecciona a nuestra página de Facebook'>
                <Facebook />
              </Link>
              <Link href="#" sx={{ ml: 2 }} color="inherit" aria-label="Redirecciona a nuestra página de Twitter">
                <Twitter />
              </Link>
              <Link href="#" sx={{ ml: 2 }} color="inherit" aria-label="Redirecciona a nuestra página de Instagram">
                <Instagram />
              </Link>
            </Box>
            <Box>
              <br />
              <Link href="#" aria-label="Redirecciona a nuestro libro de reclamaciones"> <img src="../LIBRORECLAMACIONES.png" alt='Imagen de libro de reclamaciones' /></Link>
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
