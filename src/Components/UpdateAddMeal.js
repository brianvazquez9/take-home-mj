import React, { useContext, useEffect, useState } from 'react';
import FoodsEatenContext from './FoodsEatenContext';
import { TextField , CssBaseline, Container, Typography, Button } from '@mui/material';

function UpdateAddMeal (props) {

    const { foodsEaten, updateFoods } = useContext(FoodsEatenContext);

    //add meal will take the information the user provides and add it into the list of foods
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

    // update meal func takes the name and calories from the wordToChange variable from the parent CounterContainer component and allows the user to edit the name/cals to replace what they originally had inserted it as once they hit the update button
    const { editMode, wordToChange, toggleEditMode } = props;

    const updateMeal = () => {
        const index = foodsEaten.findIndex(object => { return wordToChange.name === object.name });

        const newName = document.getElementById('outlined-name').value;
        let newCalories = parseInt(document.getElementById('outlined-calories').value);

        foodsEaten[index] = { name: newName, calories: newCalories };

        const newFoodsEaten = foodsEaten;
        updateFoods(prevFoods => [...newFoodsEaten]);
        toggleEditMode(false);
    }

    //the button(s) in this component will change based on whether or not edit mode is active, when it isn't- only add meal button will be displayed, but when it is, update and cancel buttons will be displayed and perform their appropriate actions
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

    // this use effect will fire whenever editMode or wordToChange are updated and make the name and calories field fill with the name/cals of the meal that needs editing while also changing the add meal button to update/cancel and vice versa
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
                /> 
                <TextField
                    id="outlined-calories"
                    label="Calories"
                    sx={{ margin: '1rem', width: '25%'}}
                /> 
               </div>
                {addMealButtonShown}
            </Container>
    </React.Fragment>
        </div>
    )
}

export default UpdateAddMeal;