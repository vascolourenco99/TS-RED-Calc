import { useReducer } from "react"; 
import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { calculatorReducer, ActionTypes, initialState } from "../hooks/CalcReducer";


export default function MyKeyboard() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberPress = (buttonValue: string) => {
    if (state.firstNumber.length < 10) {
      dispatch({ type: ActionTypes.SET_FIRST_NUMBER, payload: buttonValue });
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    dispatch({ type: ActionTypes.SET_OPERATION, payload: buttonValue });
    dispatch({ type: ActionTypes.SET_SECOND_NUMBER });
  };

  const clear = () => {
    dispatch({ type: ActionTypes.CLEAR });
  };

  const getResult = () => {
    dispatch({ type: ActionTypes.SET_RESULT });
  };

  const handleDeleteNumber = (firstNumber: string) => {
    if (firstNumber.length > 0) {
      dispatch({ type: ActionTypes.DELETE_NUMBER });
    }
  }
  const firstNumberDisplay = () => {
    if (state.result !== null) {
      return (
        <Text
          style={
            state.result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {state.result?.toString()}
        </Text>
      );
    }
    if (state.firstNumber && state.firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{state.firstNumber}</Text>;
    }
    if (state.firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (state.firstNumber.length > 5 && state.firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {state.firstNumber}
        </Text>
      );
    }
    if (state.firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {state.firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {state.secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {state.operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress("+/-")}
        />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="⌫"
          onPress={() => handleDeleteNumber(state.firstNumber)}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
