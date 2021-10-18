import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;
