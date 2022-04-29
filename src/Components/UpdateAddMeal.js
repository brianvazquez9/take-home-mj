import React, { useContext } from 'react';
import CaloriesContext from './CaloriesContext';

function UpdateAddMeal () {

    const { caloriesInfo, setCaloriesInfo} = useContext(CaloriesContext);


    return (
        <div>
            <p>{caloriesInfo.totalCalories}</p>
            <p>hi in UpdateAddMeal</p>
        </div>
    )

}

export default UpdateAddMeal;