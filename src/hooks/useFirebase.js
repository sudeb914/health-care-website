import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
initializeAuthentication();

//googleProvider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

//facebook provider

const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //google sign in
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   github sign in
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
    });
  };

  //facebook sign in

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      setUser(result.user);
    });
  };

  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };

  //email sign in

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password).then((result) => {
      setUser(result.user);
    });
  };

  //sign up

  const signUp = (e) => {
    e.preventDefault();
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("user's has been created")
    }).catch(error => {
      setError(error.message)
    })
  };

  // sign out

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //get the curently sign in user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser("sign in");
      }
    });
    return () => unSubscribe;
  }, []);

  return {
    signInWithGoogle,
    user,
    error,
    logOut,
    signInWithGithub,
    signInWithFacebook,
    signInWithEmail,
    getEmail,
    getPassword,
    signUp,
  };
};

export default useFirebase;
