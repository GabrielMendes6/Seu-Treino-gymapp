
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

// Configurações do Firebase retiradas do Console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBI-nhp4XYyoHitXQslgsf7qZj3VfVSA1U",
  authDomain: "seu-treino.firebaseapp.com",
  projectId: "seu-treino-d0108",
  storageBucket: "seu-treino.appspot.com",
  messagingSenderId: "412444896685",
  appId: "1:412444896685:android:9223996d42c28782a88524",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getDatabase(app);

export { auth, db };
