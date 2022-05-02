import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import CounterContainer from './CounterContainer';
import FoodsEatenContext from './FoodsEatenContext';

function App() {
    //will be bale to store state and create contexts starting here
    //state management should have object of foods and their calories
        // plus total calories that will change each time the obj of foods is changed

    const [foodsEaten, updateFoods] = useState([]);
    const [totalCals, updateTotalCals] = useState(0);

    useEffect(() => {
        console.log('foodsEaten', foodsEaten)
        if (!foodsEaten) {
            updateTotalCals(0);
            return;
        }

        else {
            console.log('entered else of use effect in app for update to foods eaten xoxo')
            let sumOfCals = 0;
            foodsEaten.forEach(food => {
                sumOfCals += food.calories
            })
        updateTotalCals(sumOfCals);
        }
    }, [foodsEaten])

    // useEffect(() => {
    //     if (foodsEaten.length) {
    //         updateTotalCals(totalCals);
    //     }
    // }, [totalCals, foodsEaten])

    return (
        <div>
            <FoodsEatenContext.Provider value={{ foodsEaten, updateFoods }}>
                <Banner />
                <CounterContainer totalCals={totalCals} updateTotalCals={updateTotalCals}/>
            </FoodsEatenContext.Provider>
        </div>
    )

}

export default App;