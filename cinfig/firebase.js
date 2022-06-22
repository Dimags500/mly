// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export function StartFirebase() {
  const firebaseConfig = {
  
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
