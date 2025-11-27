import { useState } from "react";
import { auth, db } from "../services/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Label } from "../components/Label";

export default function CriarReceita() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleCriarReceita(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;

      if (!user) {
        alert("Você precisa estar logado para criar uma receita");
        setLoading(false);
        return;
      }

      
      const ingredientesArray = ingredientes
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      await addDoc(collection(db, "receitas"), {
        titulo,
        descricao,
        ingredientes: ingredientesArray,
        userId: user.uid,
        criadoEm: Timestamp.now(),
      });

      alert("Receita criada com sucesso!");

      setTitulo("");
      setDescricao("");
      setIngredientes("");

      navigate("/minhas-receitas");
      
    } catch (error) {
      console.error("Erro ao criar receita:", error);
      alert("Erro ao criar receita");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Title center>Criar Nova Receita</Title>

      <form onSubmit={handleCriarReceita}>
        
       <Label>Título:</Label>
          <input
            type="text"
            placeholder="Digite o título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

        <Label>Descrição:</Label>
          <textarea
            placeholder="Digite a descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

         <Label>Ingredientes:</Label>
          <textarea
            placeholder="Ex: ovo, farinha, açúcar…"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        <button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Receita"}
        </button>
      </form>
    </div>
  );
}
