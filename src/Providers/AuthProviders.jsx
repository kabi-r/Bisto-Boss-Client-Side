import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
 const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        })
        return () =>{
            return unsubscribe;
        }
    },[])

    const newRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        newRegister,
        singIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;