import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBI-nhp4XYyoHitXQslgsf7qZj3VfVSA1U",
  authDomain: "seu-treino.firebaseapp.com",
  projectId: "seu-treino-d0108",
  storageBucket: "seu-treino.appspot.com",
  messagingSenderId: "412444896685",
  appId: "1:412444896685:web:abcd1234efgh5678"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Auth com AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
