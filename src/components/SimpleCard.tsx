type SimpleCardProps = {
  title: string;
  description: string;
  buttonText?: string;
   extraContent?: string; 
  onButtonClick?: () => void;
};

export default function SimpleCard({ title, description, buttonText = "Saiba mais", onButtonClick }: SimpleCardProps) {
  return (
    <div className="simple-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {onButtonClick && (
        <button onClick={onButtonClick}>{buttonText}</button>
      )}
    </div>
  );
}
