// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBZzjnTF3iAOp0Vh02oKmxQtJyFQWgwQPY",
    authDomain: "mly-test.firebaseapp.com",
    projectId: "mly-test",
    storageBucket: "mly-test.appspot.com",
    messagingSenderId: "512535345161",
    appId: "1:512535345161:web:49ba741332a4e5dd14a0d8",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
