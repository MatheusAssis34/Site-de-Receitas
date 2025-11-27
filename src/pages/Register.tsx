import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

import { auth, db } from "../services/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !senha || !telefone) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      
      const cred = await createUserWithEmailAndPassword(auth, email, senha);

     
      await setDoc(doc(db, "usuarios", cred.user.uid), {
        email,
        telefone,
        criado_em: new Date(),
      });

      alert("Cadastro realizado com sucesso!");

      
      navigate("/login");

    } catch (erro: any) {
      alert("Erro ao cadastrar: " + erro.message);
    }
  }

  return (
    <>
      <h1>CADASTRO</h1>

      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label> <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Senha:</label> <br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
          <label>Telefone:</label> <br />
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <br />
      <Link to="/login">Já tenho conta</Link>
      <br />
      <Link to="/home">Voltar</Link>
    </>
  );
};
