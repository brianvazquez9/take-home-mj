import React, { useEffect, useState } from 'react';
import UpdateAddMeal from './UpdateAddMeal';
import TotalCaloriesFoods from './TotalCaloriesFoods';

function CounterContainer (props) {

    const [ wordToChange, setWordChange ] = useState({});
    const [ editMode, toggleEditMode ] = useState(false);

    //when word to change changes, which will take the info from the item the user wants to edit that's listed in the total calories component, we will go into edit mode
    useEffect(() => {
        toggleEditMode(true);
    }, [wordToChange])


    return (
        <div>
            <UpdateAddMeal editMode={editMode} toggleEditMode={toggleEditMode} wordToChange={wordToChange} setWordChange={setWordChange}/>
            <TotalCaloriesFoods wordToChange={wordToChange} setWordChange={setWordChange}/>
        </div>
        
    )
}

export default CounterContainer;