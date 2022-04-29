import React, { useContext } from 'react';
import CaloriesContext from './CaloriesContext';

function UpdateAddMeal () {

    const calories = useContext(CaloriesContext);


    return (
        <div>
            <p>{calories}</p>
            <p>hi in UpdateAddMeal</p>
        </div>
    )

}

export default UpdateAddMeal;