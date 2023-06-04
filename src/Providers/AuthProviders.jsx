import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider(app);
 const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        if(currentUser){
            axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            .then(data => {
                // console.log(data.data);
                localStorage.setItem('access-token', data.data)
                setLoading(false)
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
        
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
    
    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile  = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const authInfo = {
        user,
        loading,
        newRegister,
        singIn,
        logOut,
        updateUserProfile,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;