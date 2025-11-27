import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
  const navigate = useNavigate();
  const { usuario, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title"> Área do Usuário</h1>

      <div className="dashboard-card">
        <p className="dashboard-text">
          Bem-vindo, <strong>{usuario?.email}</strong>
        </p>

        <div className="dashboard-buttons">

          <button
            className="dash-btn"
            onClick={() => navigate("/criar-receita")}
          >
            Criar nova receita
          </button>

          <button
            className="dash-btn"
            onClick={() => navigate("/minhas-receitas")}
          >
            Minhas receitas
          </button>

          <button
            className="dash-btn"
            onClick={() => navigate("/editar-perfil")}
          >
            Editar perfil
          </button>

          <button className="dash-btn logout" onClick={logout}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};
