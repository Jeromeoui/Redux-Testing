import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const pages = [
  {
    title: 'Pre-Requisites',
    url: '/prereqs',
  }, 
  {
    title: 'Processes',
    url: '/processes',
  }, 
  {
    title: 'FAQ',
    url: '/faq',
  },
];

export default function SearchAppBar() {
  const isWindowMaximized = useMediaQuery('(min-width: 960px)');
  const isXlScreen = useMediaQuery('(min-width: 1920px)');
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        color="primary"
        position="fixed"
        style={{ backgroundImage: "linear-gradient(to right, #28019f, #021a78)" }}
        sx={{
          // backgroundColor: '#0d47a1', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '56px',
        }} >
        <Toolbar>
        <Grid 
            container spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center">
          
        <Grid item xs={7} md={4}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex',}}
            sx={{
              '&:hover': {
                textDecoration: 'none',
                color: 'blue'
              }, 
            }}>
          <Grid container alignItems="center" spacing={1.5}>
          <Grid item>
            <HomeIcon style={{ marginTop: '-2px', }}
                            sx={{ '&:hover': {
                              textDecoration: 'none',
                              color: '#D2E7FF'
                            }, 
                            '&:active': {
                              textDecoration: 'none',
                              color: '#5EA7FB'
                            }, 
                            }}/>
          </Grid>
          <Grid item>
            <Typography
                variant="h6"
                style={{ marginTop: '-4px', fontSize: '20px' }}
                noWrap component="div"
                // style={{ marginLeft : isXlScreen ? '-100px ': '-200px' }}
                sx={{ flexGrow: 1,
                    '&:hover': {
                      textDecoration: 'none',
                      color: '#D2E7FF'
                    }, 
                    '&:active': {
                      textDecoration: 'none',
                      color: '#5EA7FB'
                    }, 
                  }}>
                User Access Management (UAM)
            </Typography>
            </Grid>
            </Grid>
          </Link>
        </Grid>
        {isWindowMaximized && (
          <Grid item xs={3} md={4}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", lg: "flex" }}}>
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{ my: 2.4, mx: {md: 0, lg: 2}, color: "white", display: "block",
                fontSize: {md: "15px", lg: "17px"},
                marginTop: '16px', 
                '&:hover': {
                  textDecoration: 'none',
                  color: '#D2E7FF'
                }, 
                '&:active': {
                  textDecoration: 'none',
                  color: '#5EA7FB'
                }, 
                }}
                // component='a'
                // href={page.url}
                onClick={() => navigate(page.url)}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          </Grid>
        )}
        {isWindowMaximized && (
        <div>
          <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Link to="https://hiskcuivsweb01.healthgrp.com.sg/uam">
              <Button variant="contained" 
              // component='a' href="https://hiskcuivsweb01.healthgrp.com.sg/uam"
              style={{ marginRight : isXlScreen ? '25px ': '15px' }}
              >Login
              </Button>
            </Link>
          </Grid>
          </Grid>
        </div>
        )}
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
