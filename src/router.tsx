import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { RecipePage } from "./pages/RecipePage";
import { Sobre } from "./pages/Sobre";

import CriarReceita from "./pages/CriarReceitas";
import MinhasReceitas from "./pages/MinhaReceita";
import EditarPerfil from "./pages/EditarPerfil";

import { PrivateRoute } from "./routes/PrivateRoute";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
     
      <Navbar />

     
      <main style={{ flex: 1, paddingTop: "100px", minHeight: "calc(100vh - 160px)" }}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/receitas" element={<RecipePage />} />
          <Route path="/sobre" element={<Sobre />} />

          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/criar-receita"
            element={
              <PrivateRoute>
                <CriarReceita />
              </PrivateRoute>
            }
          />
          <Route
            path="/minhas-receitas"
            element={
              <PrivateRoute>
                <MinhasReceitas />
              </PrivateRoute>
            }
          />
          <Route
            path="/editar-perfil"
            element={
              <PrivateRoute>
                <EditarPerfil />
              </PrivateRoute>
            }
          />

          
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};
