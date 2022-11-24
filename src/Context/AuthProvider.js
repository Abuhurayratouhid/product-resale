import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    // const user = {displayName: 'Jerry'}

    //create user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user 
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user 
    const userLogout = () => {
        return signOut(auth)
    }


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        userLogin,
        userLogout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;