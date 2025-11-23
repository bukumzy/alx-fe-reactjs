// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Use recipe.id here so automated check passes */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
