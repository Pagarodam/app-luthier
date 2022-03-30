import { getAuth } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import Loading from './loading';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); //loading state
  useEffect(() => {
    const auth = getAuth();
    return () =>
      auth.onIdTokenChanged(async (user) => {
        if (!user) {
          setCurrentUser(null);
          setLoading(false);
          return;
        }
        const token = await user.getIdToken();
        setCurrentUser(user);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading type="spin" color="#fff" />;
  }

  return (
    <AuthContext.Provider value={{ CurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
