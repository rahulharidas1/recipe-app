import React from 'react';
import './Recipe.css'

const Recipe = ({title, cuisine, image,ingredients}) =>{
    return <div className="main-div">
        <h1 className="main-header">{title}</h1>
        <img className="recipe-img" src={image} alt="food"></img>
        <p className="cuisine">Cuisine - { cuisine}</p>
        <ol className="ingredient-list">
            {
                ingredients.map((ingredient)=>{
                    return <li>{ingredient.text}</li>
                })
            }
        </ol>
        
    </div>
}

export default Recipe;