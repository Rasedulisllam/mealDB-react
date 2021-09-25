import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SelectedMeal from '../SelectedMeal/SelectedMeal';

const Feature = () => {
    const [meals,setMeals]=useState({});
    const [selectMeals,setSelectMeals]=useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data))
    },[])

    // handle select meal click
    const handleSelect=meal=>{
        const newSelect=[...selectMeals,meal];
        setSelectMeals(newSelect)
    }
    // console.log(selectMeals)
    // console.log(meals)
    const newMeals=meals.meals;
    return (
        <div className="meals-main d-flex">           
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-1 ms-5 w-75'>
                {
                    newMeals?.map(meal => <Meal handleSelect={handleSelect} meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
            <SelectedMeal selectedMeal={selectMeals}></SelectedMeal>
        </div>
    );
};

export default Feature;