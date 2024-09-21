import { View, StatusBar, StyleSheet, TouchableOpacity,} from 'react-native';
import BreakRow from "../../components/BreakRow/break";
import Options from '../../components/Options/options';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      
      <TouchableOpacity onPress={() => {
        navigation.navigate("TreinoA");
      }} >
        <Options Treino="Seus Dados!" Type="dados de sua conta!" />
      </TouchableOpacity>
      <BreakRow height={40}/>
      
      <TouchableOpacity onPress={() => {
        navigation.navigate("TreinoA");
      }} >
        <Options Treino="Admin" Type="Gerenciar Dados!" />
      </TouchableOpacity>
    </View>
  );
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 64 : 128;

const styles = StyleSheet.create({
  container:{ 
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#052260",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  imgProfile: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
