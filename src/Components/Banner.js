import React from 'react';
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FoodBankIcon from '@mui/icons-material/FoodBank';

function Banner () {
    

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FoodBankIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align='center'>
            Calorie Counter
          </Typography>
          <Button color='inherit' variant='outlined'>Clear All</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Banner;