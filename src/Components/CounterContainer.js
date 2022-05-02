import React, { useEffect, useState } from 'react';
import UpdateAddMeal from './UpdateAddMeal';
import TotalCaloriesFoods from './TotalCaloriesFoods';

function CounterContainer (props) {

    const [ wordToChange, setWordChange ] = useState({});
    const [ editMode, toggleEditMode ] = useState(false);

    useEffect(() => {
        toggleEditMode(true);
    }, [wordToChange])


    return (
        <div>
            <UpdateAddMeal editMode={editMode} toggleEditMode={toggleEditMode} wordToChange={wordToChange} setWordChange={setWordChange}/>
            <TotalCaloriesFoods totalCals={props.totalCals} updateTotalCals={props.updateTotalCals} wordToChange={wordToChange} setWordChange={setWordChange}/>
        </div>
        
    )
}

export default CounterContainer;