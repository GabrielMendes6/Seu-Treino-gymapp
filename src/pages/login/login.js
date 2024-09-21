import { View, StyleSheet, Alert, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';  // Correto
import BreakRow from '../../components/BreakRow/break';
import CustomInput from '../../components/inputs/cstInput';
import logo from "../../../assets/adaptive-iconST.png";
import CustomButton from '../../components/Buttons/customButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "@firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = () => {
        const auth = getAuth();  // Certifique-se de obter a instância correta de autenticação
        signInWithEmailAndPassword(auth, email, pass)
            .then(async (userCredential) => {
                const user = userCredential.user;
    
                // Verificar se o email foi confirmado
                if (user.emailVerified) {
                    Alert.alert("Login bem-sucedido", `Bem-vindo, ${user.displayName || user.email}`);
                    // Navegue para a tela principal após o login
                    navigation.navigate('HomeApp');
                } else {
                    Alert.alert("Verificação de Email Pendente", "Por favor, verifique seu email para confirmar sua conta.");
                    // Opcional: Enviar um novo email de verificação
                    await sendEmailVerification(user);
                }
            })
            .catch((error) => {
                Alert.alert("Erro ao fazer login", "Por favor verifique seu email/senha!");
                console.error("Erro ao fazer login:", error);  // Loga o erro para depuração
            });
    };

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.picView}>
                    <Image source={logo} style={styles.logoPic} resizeMode="contain" />
                </View>
                <View style={styles.box}>
                    <CustomInput label="Email: " bgColorText="#052260" ColorText="#f2f2f2" value={email} placeholder="Digite seu email: " onChangeText={setEmail} />
                    <BreakRow height={15} />
                    <CustomInput label="Senha: " bgColorText="#052260" ColorText="#f2f2f2" placeholder="Digite sua Senha: " onChangeText={setPass} value={pass} />
                    <BreakRow height={15} />

                    <CustomButton
                        title="Login"
                        bgColor="#f2f2f2"
                        colorText="#000"
                        onPress={() => {
                            handleLogin();
                        }}
                    />
                    <BreakRow height={15} />
                    <TouchableOpacity onPress={() => {
                        // Navegar para a tela de Login
                        navigation.navigate('SignUp');
                    }}>
                        <Text style={styles.textLogin}>Não possui uma conta? Faça seu Cadastro!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#052260"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    picView: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
    logoPic: {
        width: "80%",
        height: 100,
    },
    box: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        padding: 15,
    },
    textLogin: {
        color: "#f2f2f2"
    },
});
