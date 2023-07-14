import {
    initializeApp
} from "firebase/app"
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    linkWithCredential
}
from 'firebase/auth'



import { EmailAuthProvider } from "firebase/auth";


import toast from "react-hot-toast";


const firebaseConfig = {
    apiKey: "AIzaSyDcQtSWBEiE8JPTzDtEQ-7OlsU0kypkyQw",
    authDomain: "mon-espace-sante.firebaseapp.com",
    projectId: "mon-espace-sante",
    storageBucket: "mon-espace-sante.appspot.com",
    messagingSenderId: "983273210193",
    appId: "1:983273210193:web:371ce2fa973076cc2ad370",
    measurementId: "G-HHTHK39RMY"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
    if(err.message === 'auth/credential-already-in-use'){
      toast.error("Email already in use");
      const credential = EmailAuthProvider.credential(email, password);
      const auth = getAuth();
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    const user = usercred.user;
    console.log("Account linking success", user);
  }).catch((error) => {
    console.log("Account linking error", error);
  });
    }
    
  }
};
const registerWithEmailAndPassword = async (firstname,lastname,phonenumber,avatar, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      role: "user",
      uid: user.uid,
      firstname,
      lastname,
      phonenumber,
      avatar,
      authProvider: "local",
      email,
    });
  } catch (err) {
    if(err.message === 'auth/credential-already-in-use'){
      toast.error("Email already in use");
    }
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};