import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0_O-rOTWsxbg_-mTO-JpNlbt5e_Q7T6g",
  authDomain: "whatsapp-clone-913ea.firebaseapp.com",
  projectId: "whatsapp-clone-913ea",
  storageBucket: "whatsapp-clone-913ea.appspot.com",
  messagingSenderId: "317604688848",
  appId: "1:317604688848:web:411af302e7755bcd3bbfd5",
  measurementId: "G-13GQZ7B4DG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
