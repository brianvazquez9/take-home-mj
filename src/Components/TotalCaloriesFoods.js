import React, { useContext, useEffect } from 'react';
import FoodsEatenContext from './FoodsEatenContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


function TotalCaloriesFoods (props) {

    const { foodsEaten, updateFoodsEaten} = useContext(FoodsEatenContext);

    //may be redundant but come back and remove if need be later
    function createData(listOfFoods) {
        //takes list of foods and cals and places them in rows for the table

        if (!listOfFoods) return [];

        const foodsAndCals = [];
        listOfFoods.forEach(food => {
            foodsAndCals.push({food})
        })
        return foodsAndCals;
    }

    const rows = createData(foodsEaten.foods);

    useEffect(() => {

    }, [foodsEaten])


    return (
        <div>
            <div>
            <Typography align='center' variant='h3' padding='2rem'>
                Total Calories: {props.totalCals}
            </Typography>
            </div>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table" size='medium'>
            <TableHead>
            <TableRow>
                <TableCell>Food/Meal</TableCell>
                <TableCell align="right">Calories</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    )


}

export default TotalCaloriesFoods;