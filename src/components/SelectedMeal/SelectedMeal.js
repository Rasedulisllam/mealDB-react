import React from 'react';

const SelectedMeal = props => {
    const meals=props.selectedMeal;

    return (
        <div className="select-main mt-2 p-3 left">
            <h1 className="fs-2">Selected Meals:</h1>
            <ul className='list-group list-group-flush'>
                {
                    meals.map(meal => <li className='list-group-item' key={meal.idMeal}>{meal.strTags || meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default SelectedMeal;