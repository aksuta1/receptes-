function MyRecipesComponent({ label, image, calories, ingredients }) {
  return (
    <div>
      <div className="container" >
        <h2>{label}</h2>
      </div>

      <div className="container" >
        <img className="tasty" src={image} alt="tats" />
      </div>

      <ul className="list">
        {ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <div className="container" >
        <p>{calories.toFixed()}calories</p>
      </div >
    </div >
  )
}


export default MyRecipesComponent