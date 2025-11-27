
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="main-btn" onClick={onClick}>
      {label}
    </button>
  );
}
