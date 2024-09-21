import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResponsiveText from '../ResponsiveText/text';


export default function BallonOptionTraining({ id, exName, image, typeEx }) {
  const [textSeries, setTextSeries] = useState('');
  const [textReps, setTextReps] = useState('');
  const [textWeight, setTextWeight] = useState('');
  const [textMin, setTextMin] = useState('');

  // Função para carregar os dados do AsyncStorage
  const loadData = async () => {
    try {
      const storedSeries = await AsyncStorage.getItem(`textSeries_${id}`);
      const storedReps = await AsyncStorage.getItem(`textReps_${id}`);
      const storedWeight = await AsyncStorage.getItem(`textWeight_${id}`);
      const storedMin = await AsyncStorage.getItem(`textMin_${id}`);

      if (storedSeries !== null) {
        setTextSeries(storedSeries);
        console.log("Loaded Series: ", storedSeries); // Debugging
      }

      if (storedReps !== null) {
        setTextReps(storedReps);
        console.log("Loaded Reps: ", storedReps); // Debugging
      }

      if (storedWeight !== null) {
        setTextWeight(storedWeight);
        console.log("Loaded Weight: ", storedWeight); // Debugging
      }

      if (storedMin !== null) {
        setTextWeight(storedMin);
        console.log("Loaded Minutes: ", storedMin); // Debugging
      }
    } catch (error) {
      console.error("Falha ao carregar os dados do AsyncStorage", error);
    }
  };

  // Função para salvar os dados no AsyncStorage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(`textSeries_${id}`, textSeries);
      await AsyncStorage.setItem(`textReps_${id}`, textReps);
      await AsyncStorage.setItem(`textWeight_${id}`, textWeight);
      await AsyncStorage.setItem(`textMin_${id}`, textMin);
    } catch (error) {
      console.error("Falha ao salvar os dados no AsyncStorage", error);
    }
  };

  // Carregar os dados quando o componente for montado
  useEffect(() => {
    loadData();
  }, []);

  // Salvar os dados sempre que algum valor for alterado
  useEffect(() => {
    if (textSeries || textReps || textWeight || textMin) {
      saveData();
    }
  }, [textSeries, textReps, textWeight, textMin]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.TitlePage}>
          <ResponsiveText fontSize={5} style={styles.titleText}>{ exName }</ResponsiveText>
        </View>

        <View style={styles.Exercicios}>
          <Image source={image} style={styles.gif} />

          <View style={styles.contInput}>
              {typeEx == 1 ? (
                <>
                  <View style={styles.boxInput}>
                    <Text>Séries:</Text>
                    <TextInput 
                      style={styles.input}
                      placeholder="Séries"
                      keyboardType='numeric'
                      value={textSeries}
                      onChangeText={setTextSeries}
                    />
                  </View>

                  <View style={styles.boxInput}>
                    <Text>Repetições:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Repetições"
                      keyboardType='numeric'
                      value={textReps}
                      onChangeText={setTextReps}
                    />
                  </View>

                  <View style={styles.boxInput}>
                    <Text>Peso:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Peso"
                      keyboardType='numeric'
                      value={textWeight}
                      onChangeText={setTextWeight}
                    />
                  </View>
                </>
              ) : (
                <View style={styles.contBox}>
                  <View style={styles.boxInput}>
                    <Text>Minutos:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Minutos"
                      keyboardType='numeric'
                      value={textMin}
                      onChangeText={setTextMin}
                    />
                </View>
                </View>
              )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 28,
    paddingEnd: 28,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 20,
    paddingTop: 26,
    paddingBottom: 26,
    zIndex: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  item:{
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 27,
    color: "#000",
  },
  TitlePage: {
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    paddingBottom: 10,
  },
  contInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gif: {
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  contBox:{
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  boxInput: {
    marginTop: 10,
    alignItems: "center"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
