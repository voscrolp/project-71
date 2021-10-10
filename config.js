import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDNf7vPPKN5k4kzh7__DlQk1kjayscr7rs",
  authDomain: "complaint-forum-ca5e1.firebaseapp.com",
  projectId: "complaint-forum-ca5e1",
  storageBucket: "complaint-forum-ca5e1.appspot.com",
  messagingSenderId: "656761298207",
  appId: "1:656761298207:web:fde8f34159d8c5906ba42a"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

