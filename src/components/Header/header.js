import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity, } from "react-native";

import { Feather } from "@expo/vector-icons";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ nameUser, profileImage, routeBack, headerKey, navigation,}) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
            {headerKey !== 0 ? (
                <TouchableOpacity onPress={() => {
                    navigation.navigate(routeBack);
                }}>
                    <Text style={styles.username}>{"< Voltar"}</Text>
                </TouchableOpacity>
            ) : (
                nameUser !== "" ? (
                    <Text style={styles.username}>Olá, {nameUser}!</Text>
                ) : (
                    <Text style={styles.username}>Olá, Seja Bem-Vindo(a)!</Text>
                )
            )}


                {profileImage ? (
                    <Image source={{uri: profileImage}} style={styles.buttonUser}/>
                ) : (
                    <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                        <Feather name="user" size={27} color="#fff" />
                    </TouchableOpacity>
                )}
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#052260",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    username:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,
    }
})