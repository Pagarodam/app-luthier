import { getAuth } from 'firebase/auth';
import { createContext, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const auth = getAuth();
    return () =>
      auth.onIdTokenChanged(async (user) => {
        if (!user) {
          console.log('No user');
          return;
        }
        const token = await user.getIdToken();
        console.log(`Token: ${token}`);
        console.log(`User: ${user}`);
      });
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
