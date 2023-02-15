import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_JheVln9U68pEcxS8aLmnVgtmyfcnIGM",
  authDomain: "chef-pepper-485d5.firebaseapp.com",
  projectId: "chef-pepper-485d5",
  storageBucket: "chef-pepper-485d5.appspot.com",
  messagingSenderId: "990827705995",
  appId: "1:990827705995:web:1217a819031ef4c020068e",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
