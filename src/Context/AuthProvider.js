import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    

    //sign in with google
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //create user 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user
    const updateUser = (user)=>{
        // console.log(user)
        return updateProfile(auth.currentUser,user)
    }
    // login user 
    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user 
    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[setLoading])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        userLogin,
        userLogout,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;