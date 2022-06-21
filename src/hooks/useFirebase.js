import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const {isLoading, setIsLoading} = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }

            else{
                setUser({})
            }
        })
        return () => unSubscribe;
    }, [])

    const LogOut = ()=>{
        signOut(auth)
        .then(()=>{})
    }

    return{
        user, 
        isLoading, 
        googleSignIn,
        LogOut
    }
}

export default useFirebase;