import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./router";
import Footer from "./components/footer";

export default function App() {
  return (
    <AuthProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        
        <div style={{ flex: 1 }}>
          <AppRoutes />
        </div>

       
        <Footer />
      </div>
    </AuthProvider>
  );
}
