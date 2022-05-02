import React, { useContext, useEffect, useState } from 'react';
import FoodsEatenContext from './FoodsEatenContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Grid, Button } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';


function TotalCaloriesFoods (props) {

    const { foodsEaten, updateFoods} = useContext(FoodsEatenContext);

    function createData(listOfFoods) {
        //takes list of foods and cals and places them in rows for the table

        if (!listOfFoods) return [];

        const foodsAndCals = [];
        listOfFoods.forEach(food => {
            const { name, calories } = food;
            foodsAndCals.push({key: Math.floor(Math.random() * 10000), name, calories})
        })
        return foodsAndCals;
    }

    const [rows, updateRows] = useState(createData(foodsEaten));

    const editData = (item) => {
        console.log('the full item', item.name, item.key)
    }

    const deleteData = (item) => {
        
        const remove = foodsEaten.findIndex(food => {
            return food.name === item.name
        })

        foodsEaten.splice(remove, 1)

        const newFoods = foodsEaten
        updateFoods(newFoods);
        updateRows(createData(foodsEaten))
        
        //assumed use effect in app component would update total cals after update foods was called, but next lines execute it -
        let sumOfCals = 0;
            newFoods.forEach(food => {
                sumOfCals += food.calories
            })
        props.updateTotalCals(sumOfCals)
    }

    useEffect(() => {
        updateRows(createData(foodsEaten))
    }, [foodsEaten])



    // useEffect(() => {
    //     updateTotalCals(totalCals);
    // }, [totalCals, updateTotalCals, foodsEaten])

    return (
        <div>
            <div>
            <Typography align='center' variant='h3' padding='2rem'>
                Total Calories: {props.totalCals}
            </Typography>
            </div>
            <div position='absolute'>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table" size='medium'>
            <TableHead>
            <TableRow>
                <TableCell>Food/Meal</TableCell>
                <TableCell align="left">Calories</TableCell>
                <TableCell align="right">
                </TableCell>
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
                <TableCell align="left">{row.calories}</TableCell>
                <Button onClick={() => editData(row)} size='small' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='right'>
                    <Grid item xs={1} align='right'>
                        <ModeEditOutlineIcon />
                    </Grid>
                </TableCell>
                </Button>
                <Button onClick={() => deleteData(row)} size='small' sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                <TableCell align='right'>
                    <Grid item xs={6} align='right'>
                        <DeleteIcon />
                    </Grid>
                </TableCell>
                </Button>
                </TableRow>
            ))}
            
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    </div>
    )


}

export default TotalCaloriesFoods;