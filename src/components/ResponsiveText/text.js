import React from 'react';
import { Text, Dimensions } from 'react-native';

// Obtenha as dimensões da tela
const { width } = Dimensions.get('window');

// Função para calcular o tamanho da fonte baseado em porcentagem da largura da tela
const fontSizePercentage = (percentage) => {
  return Math.round((percentage * width) / 100);
};

// Componente de Texto Responsivo
const ResponsiveText = ({ children, fontSize, style }) => {
  return (
    <Text style={[style, { fontSize: fontSizePercentage(fontSize) }]}>
      {children}
    </Text>
  );
};

export default ResponsiveText;
