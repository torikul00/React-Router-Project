
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FoodInfo.css'
const FoodInfo = () => {
    const { foodID } = useParams()
    const [singleFoodInfo, setSingleFoodInfo] = useState({})

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleFoodInfo(data.meals[0]))
    }, [foodID])
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube } = singleFoodInfo
    const navigateHome = useNavigate()
    const backHome = () => {
        navigateHome('/')
    }
    return (
        <div className='singleCardInfo'>
            <div className="cardInfoContainer">
                <img src={strMealThumb} alt="" />
                <h1>{strMeal}</h1>
                <p> Category : {strCategory}</p>
                <p> Area : {strArea}</p>
                <p> Tags : {strTags}</p>
                <p> Tutorial : {strYoutube}</p>
                <p className='desc'> Description : <br /> {strInstructions}</p>
                <button onClick={backHome}>Back To Home</button>
            </div>
        </div>
    );
};

export default FoodInfo;