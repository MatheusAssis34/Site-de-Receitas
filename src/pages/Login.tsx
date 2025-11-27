import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await login(email, senha);
      alert("Login realizado com sucesso!");
      navigate("/dashboard"); 
    } catch (error: any) {
      console.log(error);
      alert("Erro ao fazer login: " + error.message);
    }
  }

  return (
    <>
      <h1>LOGIN</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label> <br />
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Senha:</label> <br />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      <br />
      <Link to="/home">Voltar para Home</Link>
      <br />
      <Link to="/register">Criar conta</Link>
    </>
  );
};
