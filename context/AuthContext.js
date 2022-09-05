import { GoogleAuthProvider, 
  signInWithRedirect, 
  signInWithPopup,
  signOut, 
  onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import {auth} from '../firebase'

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider);
  }

  const logout = () => {
    signOut(auth)
  }

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)

  })
  return () => {
    unsubscribe()
  }
}, [])
  return <AuthContext.Provider value={{googleSignIn, logout, user}}>{children}</AuthContext.Provider>;
}


