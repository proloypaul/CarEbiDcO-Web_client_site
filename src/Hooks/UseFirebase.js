import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import initialization from "../Components/Firebase/firebase.init";
import { useEffect, useState } from 'react';

initialization()
const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in with google 
    const signInUsingGoogle = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                saveUserTodb(user.email, user.displayName, 'PUT')
                setError('')
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // onAuthStateChange signin and signup state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    }, [auth]) 

    // create user with email and password
    const registerWithEmailAndPassword = (email, password, name, history) => {
        setIsLoading(true)
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // const user = result.user;
            // console.log(user)
            const newUser = {email, displayName: name}
            setUser(newUser)
            saveUserTodb(email, name, 'POST')
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
              }).catch((error) => {
                  setError(error.message)
              });
            history.replace('/')
            setError('')
        })
        .catch((error) => {
           setError(error.message)
        }).finally(() => setIsLoading(false))
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
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
              setError(error.message)
          }).finally(() => setIsLoading(false))
    } 

    // collect user data to set database and update

    const saveUserTodb = (email, name, method) => {
        const user = {email, name}
        const url = `http://localhost:3800/users`
        fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

            })
    }


    // load admin 
    useEffect(() => {
        const url = `http://localhost:3800/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])
     


    return{
        user,
        error,
        isLoading,
        admin,
        signInUsingGoogle,
        signOutProcess, 
        registerWithEmailAndPassword,
        loginWithEmailAndPassword
    }
}

export default UseFirebase;