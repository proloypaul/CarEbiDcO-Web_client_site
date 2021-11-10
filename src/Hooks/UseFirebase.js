import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import initialization from "../Components/Firebase/firebase.init";
import { useEffect, useState } from 'react';

initialization()
const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in with google 
    const signInUsingGoogle = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError('')
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch((error) => {
                setError(error.message)
            })
    }

    // onAuthStateChange signin and signup state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }else{

            }
          });
    }, []) 

    // create user with email and password
    const registerWithEmailAndPassword = (email, password, name, history) => {
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // const user = result.user;
            // console.log(user)
            const newUser = {email, displayName: name}
            setUser(newUser)
            
            history.replace('/')
            setError('')
        })
        .catch((error) => {
           setError(error.message)
        });
    }

    // login with email and password 
    const loginWithEmailAndPassword = (email, password, history, location) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setUser(user)
            setError('')
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .catch((error) => {
            setError(error.message)
        });
    }
    // sign out process
    const signOutProcess = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
              setError(error.message)
          });
    } 

    
     


    return{
        user,
        error,
        signInUsingGoogle,
        signOutProcess, 
        registerWithEmailAndPassword,
        loginWithEmailAndPassword
    }
}

export default UseFirebase;