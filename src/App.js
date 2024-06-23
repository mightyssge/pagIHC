import React, { useState, useEffect, useRef } from 'react';
import Fab from '@mui/material/Fab';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const togglePanel = () => {
    setOpen(!open);
  };

  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Header role = "banner"/>
      <Content role = "main"/>
      <Footer role="contentinfo"/>
      <Fab
        aria-label="Accessibility Button"
        sx={{
          position: 'fixed',
          bottom: 40,
          right: 40,
          zIndex: 1000,
          bgcolor: '#2196f3',
          color: 'white',
          '&:hover': {
            bgcolor: '#1e88e5',
            color: 'lightgrey',
          },
        }}
        onClick={togglePanel} // Aquí agregamos el evento onClick
      >
        <AccessibilityIcon />
      </Fab>
      {open && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 120,
            right: 40,
            width: 300,
            bgcolor: '#fff',
            border: '1px solid #ccc',
            padding: 16,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            zIndex: 1100,
          }}
        >
          <Typography variant="h6">Ajustes de Accesibilidad</Typography>
          <Typography variant="body1">Aquí puedes ajustar algunas configuraciones básicas de accesibilidad.</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Brillo de pantalla</Typography>
            <Slider defaultValue={50} aria-label="Brillo" />
            <FormControlLabel control={<Switch defaultChecked />} label="Modo oscuro" />
            <FormControlLabel control={<Switch />} label="Texto grande" />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
