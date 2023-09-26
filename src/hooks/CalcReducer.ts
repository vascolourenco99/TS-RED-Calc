import { State, Action } from "../types/CalculatorReducerTypes";

const initialState = {
    firstNumber: "",
    secondNumber: "",
    operation: "",
    result: null,
};

const ActionTypes = {
    SET_FIRST_NUMBER: "SET_FIRST_NUMBER",
    SET_SECOND_NUMBER: "SET_SECOND_NUMBER",
    SET_OPERATION: "SET_OPERATION",
    CLEAR: "CLEAR",
    SET_RESULT: "SET_RESULT",
    DELETE_NUMBER: "DELETE_NUMBER",
};

function calculatorReducer(state: State, action: Action) {
    switch (action.type) {
        case ActionTypes.SET_FIRST_NUMBER:
            return { ...state, firstNumber: state.firstNumber + action.payload };
        case ActionTypes.SET_SECOND_NUMBER:
            return { ...state, secondNumber: state.firstNumber, firstNumber: "" };
        case ActionTypes.SET_OPERATION:
            return { ...state, operation: action.payload };
        case ActionTypes.CLEAR:
            return initialState;
        case ActionTypes.SET_RESULT:
            return {
                ...state,
                result: calculateResult(
                    state.secondNumber,
                    state.firstNumber,
                    state.operation
                ),
                secondNumber: "",
                firstNumber: "",
                operation: "",
            };
        case ActionTypes.DELETE_NUMBER:
            return { ...state, firstNumber: state.firstNumber.slice(0, -1) };
        default:
            return state;
    }
}

function calculateResult(secondNumber: string, firstNumber: string, operation: string) {
    switch (operation) {
        case "+":
            return parseInt(secondNumber) + parseInt(firstNumber);

        case "-":
            return parseInt(secondNumber) - parseInt(firstNumber);

        case "*":
            return parseInt(secondNumber) * parseInt(firstNumber);

        case "/":
            return parseInt(secondNumber) / parseInt(firstNumber);

        default:
            return 0;
    }
}

export { calculatorReducer, initialState, ActionTypes };