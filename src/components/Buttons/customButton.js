import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomButton({ onPress, title, bgColor, colorText, fontSize }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]} onPress={onPress}>
      <Text style={[styles.buttonText, {color: colorText, fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,        // Espaçamento vertical
    paddingHorizontal: 20,      // Espaçamento horizontal
    borderRadius: 5,            // Cantos arredondados
    alignItems: 'center',       // Alinha o texto no centro
  },
  buttonText: { 
    fontWeight: 'bold',         // Negrito
  },
});
