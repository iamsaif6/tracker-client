import { createContext } from 'react';
import { updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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

  const AuthValue = {
    singUp,
    updateUserProfile,
    loginUser,
  };

  return <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
