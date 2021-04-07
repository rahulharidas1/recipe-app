import React, {useEffect,useState} from 'react'
import './App.css'
import './Recipe/Recipe'
import Recipe from './Recipe/Recipe';


const App =()=>{

  const [recipes,setRecipes] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [query, setQuery] = useState('burger')


  
  useEffect(()=>{
      const getData = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
  
    }
    getData();

  },[query]);

  const updateInputText = e =>{
    setSearchItem(e.target.value);

  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(searchItem);
    setSearchItem('');
  }
  
  
  return <> 
  <div className="App">
    <form className="main-form" onSubmit={getSearch}>
      <input onChange={updateInputText} value = {searchItem} type="text" className="search-bar"></input>
      <button type="submit" className="search-button">SEARCH</button>
    </form>
    <div className="items">
    {
      recipes.map((recipe)=>{
        return <Recipe key={recipe.recipe.label} title={recipe.recipe.label} cuisine={recipe.recipe.cuisineType} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      })
    }

    </div>

  </div>
  
  </>
}

export default App;