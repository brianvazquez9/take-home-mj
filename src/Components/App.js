import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import CounterContainer from './CounterContainer';
import FoodsEatenContext from './FoodsEatenContext';
import TotalCaloriesContext from './TotalCaloriesContext';

function App() {

    const [foodsEaten, updateFoods] = useState([]);
    const [totalCals, updateTotalCals] = useState(0);

    //anytime list of foods is updated, total calories will update as well
    useEffect(() => {
        if (!foodsEaten) {
            updateTotalCals(0);
            return;
        }

        else {
            let sumOfCals = 0;
            foodsEaten.forEach(food => {
                sumOfCals += food.calories
            })
        updateTotalCals(sumOfCals);
        }
    }, [foodsEaten])

    return (
        <div>
            <FoodsEatenContext.Provider value={{ foodsEaten, updateFoods }}>
                <Banner />
            <TotalCaloriesContext.Provider value={{ totalCals, updateTotalCals }}>
                <CounterContainer/>
            </TotalCaloriesContext.Provider>
            </FoodsEatenContext.Provider>
        </div>
    )

}

export default App;