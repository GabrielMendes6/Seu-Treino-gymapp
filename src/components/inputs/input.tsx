import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function inputs({placeholder, ...rest }: TextInputProps, ) {
 return <TextInput placeholder={placeholder} style={styles.TextInput} {...rest}  />
}

const styles = StyleSheet.create({
    TextInput:{
        width: "80%",
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        paddingLeft: 14,
    }
})