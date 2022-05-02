import React, { useContext, useEffect, useState } from 'react';
import FoodsEatenContext from './FoodsEatenContext';
import { TextField , CssBaseline, Container, Typography, Button } from '@mui/material';

function UpdateAddMeal () {

    const { foodsEaten, updateFoods } = useContext(FoodsEatenContext);

    const addMeal = () => {
        const name = document.getElementById('outlined-name').value;
        let calories = parseInt(document.getElementById('outlined-calories').value);

        if (!name || !calories || typeof calories !== 'number') {
            alert('Please enter a valid name of your meal and its calories');
            return;
        }

        updateFoods(prevFoods => [...prevFoods, { name : name, calories: calories }]);
    }

    const addMealButton = (
        <Button variant="contained" align='left' onClick={addMeal}>Add Meal</Button>
    )

    const [addMealButtonShown, updateAddMealButton] = useState(addMealButton);

    // useEffect(() => {
    //     if (editMode) updateAddMealButton('')
    //     else updateAddMealButton(addMealButton);
    //     //so when BACK or SAVE/DONE is pressed in edit context - edit mode will go back to false and that will return add meal button
    // }, [editMode])


    return (
        <div align='center'>
            <React.Fragment>
      <CssBaseline />
      <Container align='center' sx={{ margin: '2rem', padding: '2rem', width: '80vw',
        height: '30vh', boxShadow: 3
 }}>
      <Typography variant='h5' align='left' margin='0.5'>Add Meal/Food Item:</Typography>
                <div>
                <TextField
                    id="outlined-name"
                    label="Name of Food"
                    sx={{ margin: '1rem', width: '25%'}}
                    // value={name}
                /> 
                <TextField
                    id="outlined-calories"
                    label="Calories"
                    sx={{ margin: '1rem', width: '25%'}}
                    // value={name}
                /> 
               </div>
                {addMealButtonShown}
            </Container>
    </React.Fragment>
        </div>
    )

}

export default UpdateAddMeal;