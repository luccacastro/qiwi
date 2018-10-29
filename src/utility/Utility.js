import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDhohinkGt2C1czEJ3Ybl5GbPmP_ddOVSw",
    authDomain: "qiwi-e4600.firebaseapp.com",
    databaseURL: "https://qiwi-e4600.firebaseio.com",
    projectId: "qiwi-e4600",
    storageBucket: "qiwi-e4600.appspot.com",
    messagingSenderId: "85187993762"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export const firebaseDatabase = firebase.database();