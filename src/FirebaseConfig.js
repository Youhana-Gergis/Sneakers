import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/app';
const firebaseConfig = {
  apiKey: "AIzaSyD6yRSMAMY01OCMYkgu5j8jYPIUt9byAYY",
  authDomain: "emailpasswordlogin-e3fff.firebaseapp.com",
  projectId: "emailpasswordlogin-e3fff",
  storageBucket: "emailpasswordlogin-e3fff.appspot.com",
  messagingSenderId: "999449234418",
  appId: "1:999449234418:web:9abf368200cb5675f2796b"
};

const app = initializeApp(firebaseConfig);

export const database = getAuth(app)