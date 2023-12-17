import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJRPCsGMGCqhdRqednc7lIolmpKZBa4mY",
    authDomain: "cooking-recipes-site-a89af.firebaseapp.com",
    projectId: "cooking-recipes-site-a89af",
    storageBucket: "cooking-recipes-site-a89af.appspot.com",
    messagingSenderId: "676320022475",
    appId: "1:676320022475:web:063f3017c3c1d197e3f04e"
  };

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export {projectFirestore};