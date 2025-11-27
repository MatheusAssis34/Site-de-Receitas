import { createContext, useContext, useState, useEffect } from "react";
import type { User } from "firebase/auth";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


interface AuthContextType {
  usuario: User | null;
  loading: boolean;
  login: (email: string, senha: string) => Promise<any>;
  logout: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  
  const login = (email: string, senha: string) => {
    return signInWithEmailAndPassword(auth, email, senha);
  };

  
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ usuario, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  }
  return ctx;
};
