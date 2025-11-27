import React from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

interface Recipe {
  id: number;
  name: string;
  type: string;
  image: string;
}

const MinhasReceitas: React.FC = () => {
  
  const minhasReceitas: Recipe[] = [
    {
      id: 1,
      name: "Bolo de Cenoura",
      type: "Sobremesa",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Lasanha Caseira",
      type: "Prato Principal",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Pudim de Leite",
      type: "Sobremesa",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Minhas Receitas</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {minhasReceitas.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <RecipeCard
                name={recipe.name}
                type={recipe.type}
                image={recipe.image}
              />

              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#ff4e4e",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => console.log("Apagar receita", recipe.id)}
              >
                Apagar Receita
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinhasReceitas;