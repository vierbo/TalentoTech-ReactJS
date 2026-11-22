import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ⚠️ En proyectos productivos reales estas credenciales NO deben subirse al repositorio.
// 📚 En este proyecto con fines educativos, por indicación docente, se dejan acá:
const firebaseConfig = {
  apiKey: "AIzaSyAP_QHZZlF717xmyaMQrHOiwEFZ_VH0upA",
  authDomain: "grave-tienda-react.firebaseapp.com",
  projectId: "grave-tienda-react",
  storageBucket: "grave-tienda-react.firebasestorage.app",
  messagingSenderId: "59999058438",
  appId: "1:59999058438:web:caf9d6390286976fe7a187",
  measurementId: "G-8KJDD0F7EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
