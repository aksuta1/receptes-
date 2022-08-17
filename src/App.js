import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const API_ID = "cd47cb39";
  const API_KEY = "ce67599affd4616444a736db70447694	—";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado')

  useEffect(() => {
    menu()
  }, [wordSubmitted])

  const menu = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits)
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>

      <div className="container">
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" className="icons" alt="icon" />
        </button>
      </div>

      {myRecipes.map(element => (
        <MyRecipesComponent
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.calories.recipe}
          ingredients={element.recipe.ingredientLines} />
      ))}
    </div>
  );
}

export default App;
