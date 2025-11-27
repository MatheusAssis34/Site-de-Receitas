import { useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  ingredientes: string;
}

export default function MinhaReceita() {
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    async function carregarReceitas() {
      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(db, "receitas"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const lista: Receita[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Receita[];

      setReceitas(lista);
    }

    carregarReceitas();
  }, []);

  return (
    <div>
      <h1>Minhas Receitas</h1>

      {receitas.length === 0 && <p>Nenhuma receita encontrada.</p>}

      <ul>
        {receitas.map((r) => (
          <li key={r.id}>
            <h3>{r.titulo}</h3>
            <p>{r.descricao}</p>
            <small>Ingredientes: {r.ingredientes}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
