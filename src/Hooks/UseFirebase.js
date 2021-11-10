import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
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
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError('')
            }).catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }else{

            }
          });
    }, []) 

    // sign out process
    const signOutProcess = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
              setError(error.message)
          });
    } 

    
    // onAuthStateChange signin and signup state change 


    return{
        user,
        error,
        signInUsingGoogle,
        signOutProcess
    }
}

export default UseFirebase;