import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { usuario, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>Minha Receita</h1>

      <div className="nav-links">
        <Link to="/receitas">Receitas</Link>
        <Link to="/sobre">Sobre</Link>

        {usuario ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="btn-logout">
              Sair
            </button>
          </>
        ) : (
          <Link to="/login" className="btn-login-special">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
