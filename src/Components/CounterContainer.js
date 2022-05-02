import React from 'react';
import UpdateAddMeal from './UpdateAddMeal';
import TotalCaloriesFoods from './TotalCaloriesFoods';

function CounterContainer (props) {



    return (
        <div>
            <UpdateAddMeal />
            <TotalCaloriesFoods totalCals={props.totalCals} updateTotalCals={props.updateTotalCals}/>
        </div>
        
    )
}

export default CounterContainer;