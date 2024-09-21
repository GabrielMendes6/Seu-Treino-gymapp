import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../../../components/Header/header';
import BallonOptionTraining from '../../../components/BallonOptionTraining/main';
import BreakRow from '../../../components/BreakRow/break';

import Bike from "../../../assets/img/bike.gif";
import mobilidadeGlenoumeral from "../../../assets/img/noPic.png";
import roscaDireta from "../../../assets/img/roscaDireta.gif";
import roscaMartelo from "../../../assets/img/roscaMartelo.gif";
import puxadaAltaAberta from "../../../assets/img/puxadaAlta.gif";
import remadaBaixaTriangulo from "../../../assets/img/remadaBaixa.gif";
import tricepsCorda from "../../../assets/img/tricepsCorda.gif";
import tricepsReta from "../../../assets/img/tricepsBarra.gif"

export default function TreinoB({ navigation }) {
 return (
   <ScrollView>
    <View style={styles.container}>
      <Header nameUser={"< Voltar"} routeBack={"HomeTraining"} headerKey={1} navigation={navigation} />
      <BallonOptionTraining id={8} exName={"Bicicleta"} image={Bike} typeEx={0}/>
      <BreakRow/>
      <BallonOptionTraining id={9} exName={"Mobilidade Glenoumeral"} image={mobilidadeGlenoumeral} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={10} exName={"Rosca Direta - Halteres"} image={roscaDireta} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={11} exName={"Rosca Martelo - Alternado"} image={roscaMartelo} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={12} exName={"Puxada Alta Aberta"} image={puxadaAltaAberta} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={13} exName={"Remada Baixa - Triangulo"} image={remadaBaixaTriangulo} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={14} exName={"Triceps na polia - Corda"} image={tricepsCorda} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={15} exName={"Triceps na Polia - Barra Reta"} image={tricepsReta} typeEx={1}/>
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