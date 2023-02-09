import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3QjAQTQDjab64yxhVxmDJ_32rYy4pxvc",
  authDomain: "martanmatej-6e3ec.firebaseapp.com",
  projectId: "martanmatej-6e3ec",
  storageBucket: "martanmatej-6e3ec.appspot.com",
  messagingSenderId: "751561782271",
  appId: "1:751561782271:web:01c05504cbe8d3ceabadca",
  measurementId: "G-C6KFMCJS64"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);