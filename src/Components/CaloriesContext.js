import { createContext } from 'react';

const CaloriesContext = createContext({
    totalCalories: 0,
    foods: []
})

export default CaloriesContext;