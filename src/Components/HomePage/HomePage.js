import React, { useState, useEffect } from 'react';
import './HomePage.css'
import Card from '../Card/Card'



const HomePage = () => {
    const [foods, setFoods] = useState([])
    const [searchTextValue, setSearchText] = useState('')


    const searchText = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
 
     
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTextValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals.slice(0, 12)))
     
        
    }, [])

    const handleSearch = (searchText) => {
     
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
     
    }
    const moreFood = () => {
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTextValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
       
        document.getElementById('more-button').style.display = 'none'
    }

    return (
    
            <div >
                <div className="container">
                    <div >
                        <h1 className='title'>WELCOME TO FOOD CORNER</h1>
                    </div>
                    <div className='search-container'>
                        <input onChange={searchText} type="text" />
                        <button onClick={() => handleSearch(searchTextValue)}>Search Food</button>
                    </div>
                    <div className='food-container'>
                        {
                            foods?.map(food => <Card food={food} key={food.id} />)
                        }
                    </div>
                    <div className='fd-btn'>
                        <button id='more-button' onClick={moreFood} className='more-food'>MORE FOOD</button>
                    </div>
                </div>

            </div>
      
    );

};

export default HomePage;