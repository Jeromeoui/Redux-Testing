import './App.css';
import Header from './components/Header'
import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';



function App() { 

  const theme = createTheme({
    typography: {
      fontFamily: 'Trebuchet MS',
    },
  });

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <div className='content'>
        <Outlet/>
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;