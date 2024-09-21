import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import Header from "../../components/Header/header";
import Options from '../../components/Options/options';
import BreakRow from '../../components/BreakRow/break';
import { getAuth } from "@firebase/auth";

export default function Home({ navigation }) {
  const [name, setUserName] = useState("");

  useEffect(() => {
    const auth = getAuth();  // Corrigido: Chama a função getAuth para obter a instância
    const user = auth.currentUser;

    if (user) {
      // Pega o nome do usuário
      setUserName(user.displayName || "Usuário sem nome");  // displayName para o nome do usuário
    } else {
      // Se não estiver logado
      setUserName("Usuário não autenticado");
    }
  
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header nameUser={ name } RouteHome="HomeTraining" headerKey={0}/>

        <TouchableOpacity onPress={() => {
            navigation.navigate("TreinoA");
          }}
        >
          <Options Treino="Treino A" Type="Treino de Pernas" />
        </TouchableOpacity>

        <BreakRow height={40}/>

        <TouchableOpacity onPress={() => {
            navigation.navigate("TreinoB");
          }}
        >
          <Options Treino="Treino B" Type="Treino de Costas e Braços" />
        </TouchableOpacity>       
        
        <BreakRow height={40}/>

        <TouchableOpacity onPress={() => {
            navigation.navigate("TreinoC");
          }}
        >
          <Options Treino="Treino C" Type="Treino de Peito, Ombro e Posterior da Coxa" />
        </TouchableOpacity>  

        <StatusBar style="auto"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
