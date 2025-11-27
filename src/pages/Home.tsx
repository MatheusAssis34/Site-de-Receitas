import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { usuario, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bem vindo!</h1>

     
      {usuario ? (
        <>
          <p>Logado como: <strong>{usuario.email}</strong></p>
      

      
      <Link to="/receitas">Ver Receitas</Link>
      <br /><br />

      

          <Link to="/dashboard">Ir para Dashboard</Link>
          <br /><br />
          <button onClick={logout}>Sair</button>
        </>
      ) : (
       
        <>
          <Link to="/login">Login</Link>
          <br /><br />
          <Link to="/register">Cadastrar</Link>
        </>
      )}
    </div>
  );
};
