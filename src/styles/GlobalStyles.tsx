import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.dark,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.gray,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    smallTextLigth: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.dark,
    },
    // keyboard
    row: {
      maxWidth: '100%',
      flexDirection: 'row',  
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    // results
    screenFirstNumber:{
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber:{
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
})