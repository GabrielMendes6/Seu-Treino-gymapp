import { View, StyleSheet, Text, Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';  // Correto
import BreakRow from '../../components/BreakRow/break';
import CustomInput from '../../components/inputs/cstInput';
import logo from "../../../assets/adaptive-iconST.png";
import CustomButton from '../../components/Buttons/customButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { dbFirestore } from '../../database/firestoreConfig';


export default function SignUp({ navigation }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confpass, setConfPass] = useState("");

    const auth = getAuth();

    

    const signUp = async (email, pass, name, isAdmin,) => {
        try {
            // Criando usuário com email e senha
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            const user = userCredential.user;
    
            // Atualizando o perfil do usuário com o nome
            await updateProfile(user, { displayName: name });

            await setDoc(doc(dbFirestore, "users", `${name}.${user.uid}`), {
                name: name,
                isAdmin: isAdmin,
            });

            // Enviando o e-mail de verificação
            await sendEmailVerification(user);

            await navigation.navigate("Login");
    
            // Sucesso
            Alert.alert("Conta Criada com Sucesso", "E-mail de verificação enviado para: " + email);
        } catch (error) {
            // Captura qualquer erro durante o processo e exibe o alerta
            Alert.alert("Erro", error.message);
            console.error("Erro no signUp:", error);  // Loga o erro para debug
        }
    };
    

    const handleSignUp = () => {
        const isAdmin = email === "gabrielmendesx06@gmail.com";  // Verifica o e-mail de admin

        if (pass !== confpass) {
            Alert.alert("Erro", "As senhas não correspondem.");
        } else {
            signUp(email, pass, name, isAdmin, );
        }
    };
    

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.picView}>
                    <Image source={logo} style={styles.logoPic} resizeMode="contain" />
                </View>
                <View style={styles.box}>
                    <CustomInput label="Nome: " bgColorText="#052260" ColorText="#f2f2f2" inputColortxt="#f2f2f2" value={name} placeholder="Digite Seu Nome" onChangeText={setName} />
                    <BreakRow height={15} />
                    <CustomInput label="Email: " bgColorText="#052260" ColorText="#f2f2f2" value={email} placeholder="Digite seu email: " keyboardType="email-address" onChangeText={setEmail} />
                    <BreakRow height={15} />
                    <CustomInput label="Senha: " bgColorText="#052260" ColorText="#f2f2f2" placeholder="Digite sua Senha: " onChangeText={setPass} value={pass} secureTextEntry />
                    <BreakRow height={15} />
                    <CustomInput label="Confirmar Senha: " bgColorText="#052260" ColorText="#f2f2f2" placeholder="Digite sua Senha novamente: " onChangeText={setConfPass} value={confpass} secureTextEntry />
                    <BreakRow height={15} />
                    <CustomButton
                        title="Cadastrar-se"
                        bgColor="#f2f2f2"
                        colorText="#000"
                        onPress={handleSignUp}
                    />
                    <BreakRow height={15} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textLogin}>Já possui uma conta? Faça Login!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#052260",
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
