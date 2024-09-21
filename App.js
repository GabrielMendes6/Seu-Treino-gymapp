import React, { useEffect, useState } from "react";
import SignUp from "./src/pages/singUp/singup";
import Home from "./src/pages/Home";
import Settings from "./src/pages/Settings/set";
import TreinoA from "./src/pages/Treinos/TreinoA/treinoA";
import TreinoB from "./src/pages/Treinos/TreinoB/treinoB";
import TreinoC from "./src/pages/Treinos/TreinoC/treinoC";
import { ThemeProvider } from './config/ThemeContext'; // Ajuste o caminho conforme necessário
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import Login from "./src/pages/login/login";
import firebaseConfig from "./src/database/firebaseConfig";
import firestoreConfig from "./src/database/firestoreConfig";
import { getAuth } from "@firebase/auth";

// Stack de Treinos
const TrainingStack = createStackNavigator();

function TrainingTabStack() {
  return (
    <TrainingStack.Navigator screenOptions={{ headerShown: false }}>
      <TrainingStack.Screen name="HomeTraining" component={Home} />
      <TrainingStack.Screen name="TreinoA" component={TreinoA} />
      <TrainingStack.Screen name="TreinoB" component={TreinoB} />
      <TrainingStack.Screen name="TreinoC" component={TreinoC} />
    </TrainingStack.Navigator>
  );
}

// Abas principais
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#052260",
      tabBarInactiveTintColor: "#808080",
      tabBarIconStyle: { size: 30 },
    }}>
      <Tab.Screen
        name="Home"
        component={TrainingTabStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack principal contendo login e navegação
const MainStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);  // Define se o usuário está autenticado
    });

    return () => unsubscribe(); // Limpa o ouvinte quando o componente é desmontado
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <MainStack.Screen name="HomeApp" component={MyTabs} />
          ) : (
            <>
              <MainStack.Screen name="SignUp" component={SignUp} />
              <MainStack.Screen name="Login" component={Login} />
            </>
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
