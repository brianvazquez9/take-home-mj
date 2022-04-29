import React, { useState } from 'react';
import Banner from './Banner';
import CounterContainer from './CounterContainer';
import CaloriesContext from './CaloriesContext';

function App() {
    //will be bale to store state and create contexts starting here
    //state management should have object of foods and their calories
        // plus total calories that will change each time the obj of foods is changed

    const [caloriesInfo, setCalorieInfo] = useState({
        totalCalories: 0,
        foods: []
    });

console.log('calories info is here (in app.js', caloriesInfo);
    return (
        <div>
            <CaloriesContext.Provider value={{ caloriesInfo, setCalorieInfo }}>
                <Banner />
                <CounterContainer />
            </CaloriesContext.Provider>
        </div>
    )

}

export default App;