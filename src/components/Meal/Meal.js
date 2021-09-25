import React from 'react';

const Meal = props => {
    const {strTags, strMealThumb, strInstructions, strMeal}=props.meal
    return (
        <div>
            <div onClick={()=>props.handleSelect(props.meal)} className="col">
                <div className="card  h-100">
                <img src={strMealThumb} className="card-img-top" alt="meal pictures"/>
                <div className="card-body">
                    <h5 className="card-title">{strTags || strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0,200)}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;