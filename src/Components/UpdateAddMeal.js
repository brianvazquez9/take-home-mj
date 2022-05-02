import React, { useContext, useEffect, useState } from 'react';
import FoodsEatenContext from './FoodsEatenContext';
import { TextField , CssBaseline, Container, Typography, Button } from '@mui/material';

function UpdateAddMeal (props) {

    const { foodsEaten, updateFoods } = useContext(FoodsEatenContext);


    const addMeal = () => {
        let name = document.getElementById('outlined-name').value;
        let calories = parseInt(document.getElementById('outlined-calories').value);

        if (!name || !calories || typeof calories !== 'number') {
            alert('Please enter a valid name of your meal and its calories');
            return;
        }

        updateFoods(prevFoods => [...prevFoods, { name : name, calories: calories }]);
        // document.getElementById('outlined-name').value = '';
        // document.getElementById('outlined-calories').value = '';
    }

    const { editMode, wordToChange, toggleEditMode } = props;

    const updateMeal = () => {
        const index = foodsEaten.findIndex(object => { return wordToChange.name === object.name });
        console.log('the index of the key in the foods eaten list to be updated', index)

        const newName = document.getElementById('outlined-name').value;
        let newCalories = parseInt(document.getElementById('outlined-calories').value);
        // console.log('GOT new NAME AND CALS: ', newName, newCalories, 'NOW double checking still have the state info of the key original name and cals that were stores: ', wordToChange.key, wordToChange.name, wordToChange.calories);

        foodsEaten[index] = { name: newName, calories: newCalories };

        const newFoodsEaten = foodsEaten;

        updateFoods(prevFoods => [...newFoodsEaten]);
        toggleEditMode(false);
    }

    const addMealButton = (
        <Button variant="contained" align='left' onClick={addMeal}>Add Meal</Button>
    )

    const [addMealButtonShown, updateAddMealButton] = useState(addMealButton);

    const updateOrCancelButtons = (
        <div>
                <Button variant="contained" align='left' onClick={updateMeal} color='secondary' sx={{ margin: 1 }}>Update</Button>
                <Button variant="contained" align='left' onClick={()=>toggleEditMode(false)} color='error' sx={{ margin: 1 }}>Cancel</Button>
        </div>
    )

    useEffect(() => {
        if (editMode && foodsEaten.length) {
            updateAddMealButton(updateOrCancelButtons);
            document.getElementById('outlined-name').value = wordToChange.name
            document.getElementById('outlined-calories').value = wordToChange.calories
        }
        else if (!editMode) {
            updateAddMealButton(addMealButton);
        }
    }, [editMode, wordToChange])


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