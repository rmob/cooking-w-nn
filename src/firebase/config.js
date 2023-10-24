import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBX9XejoOfHiPtfcFatKnAfFjNHW3dMIxc",
    authDomain: "nn-finance-tracker-8b4e1.firebaseapp.com",
    projectId: "nn-finance-tracker-8b4e1",
    storageBucket: "nn-finance-tracker-8b4e1.appspot.com",
    messagingSenderId: "173517908624",
    appId: "1:173517908624:web:6a72b6f820399df7eec615"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }