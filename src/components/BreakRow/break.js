import { View, StyleSheet } from 'react-native';

export default function BreakRow({ height }) {
  return (
    <View style={[styles.container, { height: height }]} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: "transparent",
    zIndex: 100,
  },
});
