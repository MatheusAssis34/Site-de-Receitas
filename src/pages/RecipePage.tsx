import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";
import RecipeCard from "../components/RecipeCard";
import Carousel from "../components/Carousel";
import SimpleCard from "../components/SimpleCard";


const featuredRecipes = [
  { id: 1, name: "Pizza", type: "Italiana", image: "/images/pizza.jpg" },
  { id: 2, name: "Sushi", type: "Japonesa", image: "/images/sushi.jpg" },
  { id: 3, name: "Feijoada", type: "Brasileira", image: "/images/feijoada.jpg" },
];

export function RecipePage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
       
        <h2 style={{ marginBottom: "10px" }}>Receitas em Destaque</h2>
        <Carousel width="100%" height="300px">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              type={recipe.type}
              image={recipe.image}
            />
          ))}
        </Carousel>

        
        

        
        <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>Todas as Receitas</h2>
        <RecipeList />

        <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
        <SimpleCard
          title="Grátis"
          description="Todo o conteúdo disponível sem custo."
          extraContent="Explore receitas deliciosas, dicas de nutrição e sugestões de cardápio semanal. Aprenda de forma prática e divertida!"
          buttonText="Ver Mais"
          onButtonClick={() => alert("Você clicou no card!")}
        />
      </div>

      </main>
    </>
  );
}
