import { React } from "react";
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
    } from "react-native";

import { Feather } from "@expo/vector-icons";
import ResponsiveText from "../ResponsiveText/text";

export default function Options({Treino, Type}) {
 return (
    <View style={styles.container}>
        <View style={styles.item}>
            <ResponsiveText fontSize={7} style={styles.itemTitle}>{ Treino }</ResponsiveText>
            <View style={styles.typeWork}>
                <ResponsiveText fontSize={3} style={styles.workType}>{ Type }</ResponsiveText>
            </View>
        </View>

        <View style={styles.arrow}>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonArrow}>
                <Feather name="chevron-right" size={27} color={"#000"} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
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
    },
    itemTitle:{
        // fontSize: 24,
        color: "#000",
    },
    arrow:{
        justifyContent: "center",
        alignItems: "center",
    },
    buttonArrow:{
        borderRadius: 10,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    workType:{
        fontWeight: "bold",
    },
})