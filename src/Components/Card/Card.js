import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'
const Card = (props) => {
    const navigate = useNavigate()

    const { idMeal, strMeal, strCategory, strMealThumb, strArea } = props.food

    const handleFoodInfo = () => {
        navigate(`${idMeal}`)
    }
    return (
        <div className='card'>
            <img className='img' src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <p> Category : {strCategory}</p>
            <p> Area : {strArea}</p>
            <button onClick={handleFoodInfo} className='button'>More Info</button>
        </div>
    );
};

export default Card;