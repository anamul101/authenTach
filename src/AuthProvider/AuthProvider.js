import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../components/Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    // signIn with Google
    const SignInGoogle = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    // signIn with github
    const signInGuthub = (provider)=>{
        setLoader(true)
        return signInWithPopup(auth, provider);
    }
    // register submit
    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const lognOut = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // ubdate profile
    const upProfile = (profile)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,profile)
    }
    // email varification
    const verify = ()=>{
        setLoader(true)
        return sendEmailVerification(auth.currentUser)
    }
    // reset password
    const passwordChange =(email)=>{
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    }
    // lognout
    const signOutSite =()=>{
        setLoader(true)
        return signOut(auth);
    }
    // user change 
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)

        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loader,
        setLoader,
        createUser,
        lognOut,
        upProfile,
        signOutSite,
        verify,
        SignInGoogle,
        passwordChange,
        signInGuthub  
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;