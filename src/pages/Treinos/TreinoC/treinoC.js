import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../../../components/Header/header';
import BallonOptionTraining from '../../../components/BallonOptionTraining/main';
import BreakRow from '../../../components/BreakRow/break';

import supinoArticulado from "../../../assets/img/supinoArticuladoVertical.gif";
import supinoInclinadoArt from "../../../assets/img/supinoInclinadoMaquina.gif";
import desenvolvimentoArticulado from "../../../assets/img/desenvolvimentoArticulado.gif";
import elevacaoLateral from "../../../assets/img/elevacaoLateralSentado.gif";
import afundoLivre from "../../../assets/img/afundoLivre.gif";
import agachamentoSumo from "../../../assets/img/agachamentoSumo.gif";
import agachamentoAnilha from "../../../assets/img/squatWithRingPress.gif";

export default function TreinoC({ navigation }) {
 return (
   <ScrollView>
    <View style={styles.container}>
      <Header nameUser={"< Voltar"} routeBack={"HomeTraining"} headerKey={1} navigation={navigation} />
      <BallonOptionTraining id={16} exName={"Supino Articulado Vertical"} image={supinoArticulado} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={17} exName={"Supino Articulado Inclinado"} image={supinoInclinadoArt} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={18} exName={"Desenvolvimento Articulado"} image={desenvolvimentoArticulado} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={19} exName={"Elevação Lateral - Sentado"} image={elevacaoLateral} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={20} exName={"Afundo Livre - Sem Carga"} image={afundoLivre} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={21} exName={"Agachamento Sumo com Suporte"} image={agachamentoSumo} typeEx={1}/>
      <BreakRow/>
      <BallonOptionTraining id={22} exName={"Agachamento c/Desenv...Anilha"} image={agachamentoAnilha} typeEx={1}/>
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