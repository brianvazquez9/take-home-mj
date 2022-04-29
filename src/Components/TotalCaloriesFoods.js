import React, { useContext } from 'react';
import CaloriesContext from './CaloriesContext';

function TotalCaloriesFoods () {

    const calories = useContext(CaloriesContext);

    return (
        <p>{calories}</p>
    )


}

export default TotalCaloriesFoods;