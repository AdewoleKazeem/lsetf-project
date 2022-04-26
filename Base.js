import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD48Sjp09JfTyDkQA0fDi8ILwIEaRx2-F4",
  authDomain: "lsetf-kazeem.firebaseapp.com",
  projectId: "lsetf-kazeem",
  storageBucket: "lsetf-kazeem.appspot.com",
  messagingSenderId: "529609236558",
  appId: "1:529609236558:web:9e405fdf1578c45ed8231f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
