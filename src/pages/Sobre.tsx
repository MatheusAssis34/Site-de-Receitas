
import Footer from "../components/footer";

export const Sobre = () => {
  return (
    <>
    <div style={{ maxWidth: "900px", margin: "120px auto 40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center" }}>
        Sobre o Minha Receita
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#555", marginBottom: "16px" }}>
        O <strong>Minha Receita</strong> é uma plataforma desenvolvida para facilitar o acesso a receitas de diversos tipos e nacionalidades.
        Nosso objetivo é permitir que os usuários encontrem receitas, criem suas próprias e compartilhem com a comunidade.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#555", marginBottom: "16px" }}>
        A plataforma foi construída utilizando <strong>React</strong>, <strong>TypeScript</strong> e <strong>Firebase</strong>, oferecendo uma experiência moderna, segura e responsiva.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#555", marginBottom: "16px" }}>
        Esperamos que você aproveite nossas receitas e participe da comunidade criando e compartilhando suas próprias delícias!
      </p>
    </div>
    <Footer />
    </>
  );
};