import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
          MORALM
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          CFempl 123456789
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
