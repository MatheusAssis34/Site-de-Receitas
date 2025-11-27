import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { SearchBar } from "./SearchBar"; 

type Recipe = {
  name: string;
  type: string;
  image: string;
};

const recipes: Recipe[] = [
  { name: "Pizza", type: "Italiana", image: "/images/pizza.jpg" },
  { name: "Sushi", type: "Japonesa", image: "/images/sushi.jpg" },
  { name: "Feijoada", type: "Brasileira", image: "/images/feijoada.jpg" },
  { name: "Tacos", type: "Mexicana", image: "/images/tacos.jpg" },
  { name: "Curry", type: "Indiana", image: "/images/curry.jpg" },
  { name: "Ramen", type: "Japonesa", image: "/images/ramen.jpg" },
  { name: "Hambúrguer Artesanal", type: "Americana", image: "/images/burger.jpg" },
  { name: "Paella", type: "Espanhola", image: "/images/paella.jpg" },
  { name: "Crepe", type: "Francesa", image: "/images/crepe.jpg" },
];

export default function RecipeList() {
  const [filter, setFilter] = useState("");

  const filteredRecipes = recipes.filter(
    recipe =>
      recipe.name.toLowerCase().includes(filter.toLowerCase()) ||
      recipe.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
     
      <SearchBar onSearch={setFilter} placeholder="Pesquisar receitas..." />

      
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.name}
              type={recipe.type}
              image={recipe.image}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Nenhuma receita encontrada.
          </p>
        )}
      </div>
    </div>
  );
}
