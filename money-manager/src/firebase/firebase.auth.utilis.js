import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdpCg09ayT1RjP9RvjLLnPaO3duLY8r-M",
  authDomain: "money-manager-710ff.firebaseapp.com",
  databaseURL: "https://money-manager-710ff.firebaseio.com",
  projectId: "money-manager-710ff",
  storageBucket: "money-manager-710ff.appspot.com",
  messagingSenderId: "162451103657",
  appId: "1:162451103657:web:7138f1365006276d36eeb8",
  measurementId: "G-5F9RL76GC2",
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
    };
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(function (error) {
    var message = error.message;
    console.log(message);
    console.log(error.status);
  });

export default firebase;
