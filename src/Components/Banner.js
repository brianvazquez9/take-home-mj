import React, { useContext } from 'react';
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FoodsEatenContext from './FoodsEatenContext';

function Banner () {

    const { updateFoods } = useContext(FoodsEatenContext);

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
          <Button color='inherit' variant='outlined' onClick={() => updateFoods([])}>Clear All</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Banner;