// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyCzrSrkjTCl-kvAPmsgUOXeFAu7oYmkYBg",
	authDomain: "assignment-js-nangcao.firebaseapp.com",
	projectId: "assignment-js-nangcao",
	storageBucket: "assignment-js-nangcao.appspot.com",
	messagingSenderId: "441913889115",
	appId: "1:441913889115:web:43f0f2be610cf1c029ca7e",
	measurementId: "G-3MS22HJTRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default auth;
export { provider };
