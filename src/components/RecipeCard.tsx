
type RecipeCardProps = {
  name: string;
  type: string;
  image: string;
};

export default function RecipeCard({ name, type, image }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
}
