import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../../../components/Header/header';
import BallonOptionTraining from '../../../components/BallonOptionTraining/main';
import BreakRow from '../../../components/BreakRow/break';

import hexSquat from "../../../assets/img/HexSquat.gif";
import cadeiraFlexora from "../../../assets/img/cadeiraFlexora.gif";
import cadeiraExtensora from "../../../assets/img/cadeiraExtensora.gif";
import cadeiraAbdutora from "../../../assets/img/cadeiraAbdutora.gif";
import cadeiraAdutora from "../../../assets/img/cadeiraAdutora.gif";
import panturilhaLivre from "../../../assets/img/panturilhaLivre.gif";
import Treadmill from "../../../assets/img/Treadmill.gif";


export default function TreinoA({ navigation }) {
 return (
   <ScrollView>
    <View style={styles.container}>
      <Header nameUser={"< Voltar"} routeBack={"HomeTraining"} headerKey={1} navigation={navigation} />
      <BallonOptionTraining id={0} exName={"Esteira"} image={Treadmill} typeEx={0}/>
      <BreakRow/>
      <BallonOptionTraining id={1} exName={"Agachamento Hexagonal"} image={hexSquat} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={2} exName={"Cadeira Flexora"} image={cadeiraFlexora} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={3} exName={"Cadeira Extensora"} image={cadeiraExtensora} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={4} exName={"Cadeira Abdutora"} image={cadeiraAbdutora} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={5} exName={"Cadeira Adutora"} image={cadeiraAdutora} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={6} exName={"Panturilha Livre"} image={panturilhaLivre} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={7} exName={"Esteira"} image={Treadmill} typeEx={0}/>
      <BreakRow/>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{  
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  }
})