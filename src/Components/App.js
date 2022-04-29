import React from 'react';
import Banner from './Banner';
import CounterContainer from './CounterContainer';
import CaloriesContext from './CaloriesContext';

function App() {
    //will be bale to store state and create contexts starting here
    //state management should have object of foods and their calories
        // plus total calories that will change each time the obj of foods is changed


    return (
        <div>
            <Banner />
            <CaloriesContext.Provider value='heyy from the context'>
                <CounterContainer />
            </CaloriesContext.Provider>
        </div>
    )

}

export default App;