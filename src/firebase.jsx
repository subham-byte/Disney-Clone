import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-_QZe3HoRiCv0sSwQGZgB6gTOZSoIJSU",
  authDomain: "disney-clone-988ea.firebaseapp.com",
  databaseURL: "https://disney-clone-988ea-default-rtdb.firebaseio.com",
  projectId: "disney-clone-988ea",
  storageBucket: "disney-clone-988ea.appspot.com",
  messagingSenderId: "12538829414",
  appId: "1:12538829414:web:a88ef09fbdfa6a0d526ba7",
  measurementId: "G-K1H2W9C26F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;