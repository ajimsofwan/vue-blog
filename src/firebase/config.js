import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3m385NNjfWLyNMdcUdICX_UETbiktmcc",
  authDomain: "vue-blog-deb22.firebaseapp.com",
  projectId: "vue-blog-deb22",
  storageBucket: "vue-blog-deb22.appspot.com",
  messagingSenderId: "150557476420",
  appId: "1:150557476420:web:0e020386a57b945ce29e11",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
