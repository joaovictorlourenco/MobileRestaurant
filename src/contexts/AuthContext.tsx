import { createContext, useState } from "react";
import { login } from "../services/Auth";

interface AuthContextData {
  signed: boolean;
  signIn(email: string, password: string): Promise<any>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [signed, setSigned] = useState(false);

  async function signIn(email: string, password: string) {
    const response = await login(email, password);

    if (response) {
      setSigned(true);
      return true;
    }

    return false;
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
