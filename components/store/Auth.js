import { onAuthStateChanged, signOut } from 'firebase/auth';
import { authentication } from '../firebase/client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [userDB, setUserDB] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
        setUserDB(null);
      }
    });
    return () => unsubscribe();
  }, [authentication]);

  const logOut = async () => {
    await signOut(authentication);
  };

  return (
    <AuthContext.Provider
      value={{ userAuth: userAuth, userDB: userDB, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
