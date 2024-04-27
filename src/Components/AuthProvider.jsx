import { createContext, useEffect, useState } from 'react';
import { updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign up user
  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Update profile after login
  const updateUserProfile = (name, photUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photUrl,
    });
  };

  //   Login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout Current User

  const LogOut = () => {
    return signOut(auth);
  };

  //   Monitor the current user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthValue = {
    singUp,
    updateUserProfile,
    loginUser,
    user,
    LogOut,
  };

  return <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
