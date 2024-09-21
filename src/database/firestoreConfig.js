
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Configurações do Firebase retiradas do Console Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);


const dbFirestore = getFirestore(app);

export { dbFirestore };
