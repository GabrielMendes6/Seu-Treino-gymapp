import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CustomInput = ({ label, value, onChangeText, placeholder, bgColorText, ColorText, keyboardType }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, {borderColor: ColorText}]}>
        <Text style={[styles.label, {backgroundColor: bgColorText, color: ColorText}]}>{label}</Text>
        <TextInput
          style={[styles.input, {color: ColorText}]}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder} // Não precisa de placeholder se você já tem um rótulo
          placeholderTextColor={ColorText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  innerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -8, // Ajusta a posição do texto dentro da borda
    left: 10,
    paddingHorizontal: 5,
    fontSize: 14,
  },
  input: {
    height: 35,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default CustomInput;
