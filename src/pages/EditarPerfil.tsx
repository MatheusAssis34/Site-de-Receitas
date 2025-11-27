import { useState, useEffect } from "react";
import { auth, db } from "../services/firebase";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditarPerfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    async function carregarPerfil() {
      const user = auth.currentUser;
      if (!user) return;

      setEmail(user.email || "");

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setNome(snap.data().nome || "");
      }
    }

    carregarPerfil();
  }, []);

  async function handleSalvar(e: React.FormEvent) {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) return;

    try {
      
      await updateDoc(doc(db, "users", user.uid), {
        nome,
      });

     
      if (email !== user.email) {
        await updateEmail(user, email);
      }

     
      if (senha.trim().length > 0) {
        await updatePassword(user, senha);
      }

      alert("Perfil atualizado!");

    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar perfil");
    }
  }

  return (
    <div>
      <h1>Editar Perfil</h1>

      <form onSubmit={handleSalvar}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Novo email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Novo senha (opcional)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}
