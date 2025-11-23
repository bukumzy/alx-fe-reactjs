import { useRecipeStore } from "../recipeStore";

const FavouritesList = () => {
  const favourites = useRecipeStore((state) =>
    state.favourites.map((id) => state.recipes.find((r) => r.id === id))
  );

  const removeFavourite = useRecipeStore((state) => state.removeFavourite);

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 && <p>No favourites yet</p>}
      {favourites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavourite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
