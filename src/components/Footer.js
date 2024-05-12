import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50', marginTop: 'auto' }}>
      <Toolbar>
        <Typography variant="body1" style={{ color: 'white', textAlign: 'center', width: '100%' }}>
          © 2024 MORALM, All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
